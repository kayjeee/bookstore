const books = JSON.parse(localStorage.getItem('form')) || [];

class Books {
  constructor(author, title, books, button) {
    this.author = author;
    this.title = title;
    this.books = books;
    this.button = button;
  }

  addBook() {
    const { title } = this;
    const { author } = this;

    const newBook = {
      title,
      author,
    };

    this.books.push(newBook);
  }

  deleteBook() {
    const item = this.button.parentNode;
    const parent = item.parentNode;
    parent.parentNode.removeChild(parent);

    const { id } = this.button;

    for (let i = 0; i < this.books.length; i += 1) {
      if (id.includes(i)) {
        this.books.splice(i, 1);
      }
    }
  }
}

function storeForm(form) {
  localStorage.setItem('form', JSON.stringify(form));
}

function displayBooks(book, index) {
  const content = `
    <tr class="tableRow">
        <td>"${book.title}" by ${book.author} </td>   
        <td><button id ="delete${index}">Remove</button></td>
    </tr>
    `;
  return content;
}

const addButton = document.getElementById('addBook');
const newTitle = document.getElementById('bookTitle');
const newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');
const navBar = document.querySelector('.nav-bar');

for (let i = 0; i < books.length; i += 1) {
  const book = displayBooks(books[i], i);
  container.innerHTML += book;
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (newAuthor.value !== '' && newTitle.value !== '') {
    const library = new Books(newAuthor.value, newTitle.value, books);
    library.addBook();
    storeForm(books);
    window.location.reload();
  }
  document.getElementById('addNewForm').reset();
});

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const libraryOne = new Books(newAuthor.value, newTitle.value, books, button);
    libraryOne.deleteBook();
    storeForm(books);
  });
});

// SPA

const navHome = document.querySelector('.nav-home');
const navBooks = document.querySelector('.nav-books');
const navContact = document.querySelector('.nav-contact');

const homeSection = document.querySelector('.home');
const bookSection = document.querySelector('.books');
const contactSection = document.querySelector('.contacts');

navHome.addEventListener('click', () => {
  navHome.style.color = 'blue';
  navBooks.style.color = 'black';
  navContact.style.color = 'black';
  homeSection.style.display = 'flex';
  bookSection.style.display = 'none';
  contactSection.style.display = 'none';
});
navBooks.addEventListener('click', () => {
  navHome.style.color = 'black';
  navBooks.style.color = 'blue';
  navContact.style.color = 'black';
  homeSection.style.display = 'none';
  bookSection.style.display = 'flex';
  contactSection.style.display = 'none';
});
navContact.addEventListener('click', () => {
  navHome.style.color = 'black';
  navBooks.style.color = 'blue';
  navContact.style.color = 'black';
  homeSection.style.display = 'none';
  bookSection.style.display = 'none';
  contactSection.style.display = 'block';
});
const handleNavClick = (navItem, navItems, sections) => {
  // Reset all nav items and sections
  navItems.forEach((item) => {
    item.style.color = 'black';
  });
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  // Highlight selected nav item and show corresponding section
  navItem.style.color = 'blue';
  const { sectionId } = navItem.dataset;
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'flex';
  }
};

navContact.addEventListener('click', () => {
  const navItems = navBar.querySelectorAll('.nav-item');
  handleNavClick(navContact, navItems, [contactSection]); // <-- Pass contactSection as argument
});

const timeSlot = document.getElementById('time');

const today = new Date();
const date = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()} ${today.getFullYear()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

timeSlot.innerHTML = dateTime;