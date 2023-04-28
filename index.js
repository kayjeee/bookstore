const books = JSON.parse(localStorage.getItem('form')) || [];

function displayBooks(book, index) {
  const content = `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>    
        <button id ="delete${index}">Remove</button>
        <hr>
    </div>
    `;
  return content;
}

function storeForm(form) {
  localStorage.setItem('form', JSON.stringify(form));
}

const addButton = document.getElementById('addBook');
const newTitle = document.getElementById('bookTitle');
const newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (newAuthor.value !== '' && newTitle.value !== '') {
    const title = newTitle.value;
    const author = newAuthor.value;
    const newBook = {
      title,
      author,
    };

    books.push(newBook);
    storeForm(books);
    const book = displayBooks(newBook, books.length - 1);

    container.innerHTML += book;
  }
  addButton.form.reset(); // use form property of the button element to reset the form
});

for (let i = 0; i < books.length; i += 1) {
  const book = displayBooks(books[i], i);
  container.innerHTML += book;
}

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentNode;
    item.parentNode.removeChild(item);

    const { id } = button;

    for (let i = 0; i < books.length; i += 1) {
      if (id.includes(i)) {
        books.splice(i, 1);
      }
    }

    storeForm(books);
  });
});
