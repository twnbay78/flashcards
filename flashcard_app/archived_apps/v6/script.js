async function loadFlashcards() {
    try {
        // Simulating the fetching of file list from the server
        const fileNames = [
            'flashcards/flashcard1.json',
            'flashcards/flashcard2.json',
            'flashcards/flashcard3.json',
            'flashcards/flashcard4.json',
            'flashcards/flashcard5.json'
        ];

        const flashcards = await Promise.all(fileNames.map(async (file) => {
            try {
                const response = await fetch(file);
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
