let currentPage = 1;
const itemsPerPage = 5;

function renderFlashcards() {
    const container = document.querySelector('.flashcard-container');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedFlashcards = flashcards.slice(start, end);
    container.innerHTML = paginatedFlashcards.map(flashcard => `
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
    renderPagination();
}

function renderPagination() {
    const container = document.querySelector('.flashcard-container');
    const totalPages = Math.ceil(flashcards.length / itemsPerPage);
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    pagination.innerHTML = `
        <button onclick="prevPage()" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
        <span>Page ${currentPage} of ${totalPages}</span>
        <button onclick="nextPage()" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
    `;
    container.appendChild(pagination);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderFlashcards();
    }
}

function nextPage() {
    const totalPages = Math.ceil(flashcards.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderFlashcards();
    }
}

document.addEventListener('DOMContentLoaded', renderFlashcards);

function flipCard(card) {
    card.classList.toggle('flip');
}
