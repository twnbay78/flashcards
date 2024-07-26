const flashcards = [
    { question: "What is the bow?", answer: "front of vessel", section: "NJ Boaters Exam Guide - Terms" },
    { question: "What is the stern?", answer: "rear of vessel", section: "NJ Boaters Exam Guide - Terms" },
    { question: "What is the port?", answer: "left of vessel", section: "NJ Boaters Exam Guide - Terms" },
    { question: "What is the starboard?", answer: "right of vessel", section: "NJ Boaters Exam Guide - Terms" },
    { question: "What is the cleat?", answer: "metal fitting on which rope can be fastened", section: "NJ Boaters Exam Guide - Terms" },
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
                <p class="section">${flashcard.section}</p>
            </div>
        </div>
    `).join('');
});
