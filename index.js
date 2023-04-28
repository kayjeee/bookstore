/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
// Retrieve saved book data from localStorage (if any)
let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

// Select DOM elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const bookList = document.getElementById('book-list');

// Display initial book collection
renderBookList();

// Add event listener to "Add" button
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  if (title && author) {
    addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  }
});

// Function to add a book to the collection
function addBook(title, author) {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  renderBookList();
}

// Function to remove a book from the collection
function removeBook(title, author) {
  bookCollection = bookCollection.filter(
    (book) => book.title !== title || book.author !== author,
  );
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  renderBookList();
}

// Function to render the book list
function renderBookList() {
  bookList.innerHTML = '';
  bookCollection.forEach((book) => {
    const li = document.createElement('li');
    const title = document.createElement('span');
    title.textContent = book.title;
    const author = document.createElement('span');
    author.textContent = ` by ${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBook(book.title, book.author);
    });
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}
