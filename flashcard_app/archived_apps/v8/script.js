async function loadFlashcards() {
    try {
        // Fetch the list of files from flashcards_list.txt
        const response = await fetch('flashcards_list.txt');
        const text = await response.text();
        const fileNames = text.split('\n').filter(name => name.trim().length > 0);

        const flashcards = await Promise.all(fileNames.map(async (file) => {
            try {
                const response = await fetch(file.trim());
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
