// User inputs
let authorInput = document.querySelector('#author');
let readInput = document.querySelector('#read');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');

let display = document.querySelector('.display');

// button
const button = document.querySelector('button');

//display
const authorDisplay = document.querySelector('.author');
const pagesDisplay = document.querySelector('.pages');
const titleDisplay = document.querySelector('.title');
const readDisplay = document.querySelector('.read');

// All books
let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
   myLibrary.push(this);
}


button.addEventListener('click', () => {
    let pages = pagesInput.value;
    let title = titleInput.value;
    let author = authorInput.value;
    let read = readInput.value;
    let newBook = new Book(author, title,pages , read);
    newBook.addBookToLibrary();
        for(let i = 0; i < myLibrary.length; i++) {
            // create a card
            let newCard = document.createElement('div');
            newCard.setAttribute('class', 'card');
            
            // create card sections
            let authorSec = document.createElement('div');
            let pagesSec = document.createElement('div');
            let titleSec = document.createElement('div');
            let readSec = document.createElement('div');
        // add delete button
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'delete');
            deleteBtn.innerText = 'delete';
            deleteBtn.addEventListener('click', () => {
                deleteBtn.parentElement.remove();
            })
            newCard.appendChild(deleteBtn);
            // set the content 
            authorSec.innerText = `The author is ${myLibrary[i].author}`;
            pagesSec.innerText = `${myLibrary[i].pages} pages`;
            titleSec.innerText = `The title is ${myLibrary[i].title}`;    
            readSec.innerText = `read: ${myLibrary[i].read}`;
            
            // append sections to the card
            newCard.appendChild(titleSec);
            newCard.appendChild(authorSec);
            newCard.appendChild(pagesSec);
            newCard.appendChild(readSec);

            
            // append the card to the display
            display.appendChild(newCard);
        }
        myLibrary = [];
        // clear the input's
        authorInput.value = '';
        pagesInput.value = '';
        titleInput.value = '';
        readInput.value = '';   
});
