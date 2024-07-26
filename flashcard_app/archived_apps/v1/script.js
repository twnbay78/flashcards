const flashcards = [
    { question: "bow", answer: "front of vessel", section: "Terms" },
    { question: "stern", answer: "rear of vessel", section: "Terms" },
    { question: "port", answer: "left of vessel", section: "Terms" },
    { question: "starboard", answer: "right of vessel", section: "Terms" },
    { question: "cleat", answer: "metal fitting on which rope can be fastened", section: "Terms" },
    // Add other flashcards here
];

function flipCard(card) {
    card.classList.toggle('flip');
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flashcard-container');
    container.innerHTML = flashcards.map(flashcard => `
        <div class="flashcard" onclick="flipCard(this)">
            <div class="front">
                <p class="question">${flashcard.question}</p>
            </div>
            <div class="back">
                <p class="answer">${flashcard.answer}</p>
                <p class="section">Section: ${flashcard.section}</p>
            </div>
        </div>
    `).join('');
});
