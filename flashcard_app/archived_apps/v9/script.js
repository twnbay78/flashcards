const flashcards = [flashcard1, flashcard2, flashcard3, flashcard4, flashcard5];

function loadFlashcards() {
    const container = document.querySelector('.flashcard-container');
    container.innerHTML = flashcards.map(flashcard => `
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
}

function flipCard(card) {
    card.classList.toggle('flip');
}

document.addEventListener('DOMContentLoaded', loadFlashcards);
