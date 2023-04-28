const bookList = [];

function renderBookList() {
  const bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = '';

  bookList.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <button class="removeButton" data-index="${index}">Remove</button>
    `;
    bookListElement.appendChild(bookElement);
  });
}

function addBook() {
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    bookList.push({ title, author });
    renderBookList();
    titleInput.value = '';
    authorInput.value = '';
  }
}

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addBook);

const bookListElement = document.getElementById('bookList');
bookListElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeButton')) {
    const index = event.target.getAttribute('data-index');
    bookList.splice(index, 1);
    renderBookList();
  }
});

renderBookList();
