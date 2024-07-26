async function loadFlashcards() {
    try {
        // Fetch the list of files in the flashcards directory
        const response = await fetch('flashcards/');
        const text = await response.text();

        // Parse the directory listing to get JSON files
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, 'text/html');
        const links = htmlDoc.querySelectorAll('a');
        const fileNames = Array.from(links).map(link => link.href.split('/').pop()).filter(name => name.endsWith('.json'));

        const flashcards = await Promise.all(fileNames.map(async (file) => {
            try {
                const response = await fetch(`flashcards/${file}`);
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }
                return response.json();
            } catch (error) {
                console.error(`Error loading file ${file}:`, error);
                return null;
            }
        }));

        const validFlashcards = flashcards.filter(flashcard => flashcard !== null);

        const container = document.querySelector('.flashcard-container');
        container.innerHTML = validFlashcards.map(flashcard => `
            <div class="flashcard" onclick="flipCard(this)">
                <div class="front">
                    <p class="question">${flashcard.question}</p>
                </div>
                <div class="back">
                    <p class="answer">${flashcard.answer}</p>
                    <p class="section">${flashcard.section}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading flashcards:', error);
    }
}

function flipCard(card) {
    card.classList.toggle('flip');
}

document.addEventListener('DOMContentLoaded', loadFlashcards);
