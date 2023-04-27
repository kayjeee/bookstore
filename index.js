var btn = document.querySelector("#button"); 

var title = document.querySelector("#title");
var author = document.querySelector("#author");
var booksection = document.querySelector(".books");

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

function storeForm(form) {s
  localStorage.setItem('form', JSON.stringify(form));
}
s