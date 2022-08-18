(function() {
    // User inputs
let authorInput = document.querySelector('#author');
let readBtn = document.querySelectorAll('.read');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');

let display = document.querySelector('.display');
// button
const addABook = document.querySelector('#add-a-book');

//display
const authorDisplay = document.querySelector('.author');
const pagesDisplay = document.querySelector('.pages');
const titleDisplay = document.querySelector('.title');
const readDisplay = document.querySelector('.read');

let myLibrary = [];
// read button
let readBtn2 = document.querySelector('#read');
readBtn2.addEventListener('click', readStatus);

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
   myLibrary.push(this);
}

Book.prototype.createNewCard = createCard;

function getBookInfo() {
    let pages = pagesInput.value;
    let title = titleInput.value;
    let author = authorInput.value;
    let read = readBtn2.innerText.toLowerCase();
    let newBook = new Book(author, title,pages , read);
    newBook.addBookToLibrary();
    newBook.createNewCard(myLibrary);
}
        
addABook.addEventListener('click', getBookInfo);
 
    function createCard(array) {
          display.innerText = '';
        for(let i = 0; i < array.length; i++) {
            // create a card
            let newCard = document.createElement('div');
            newCard.setAttribute('class', 'card');
            newCard.setAttribute('data-index', i);

            // create card sections
            let header = document.createElement('h1');
            let authorSec = document.createElement('p');
            let pagesSec = document.createElement('p');
            let titleSec = document.createElement('p');
            let readHeader = document.createElement('p');
            let readSec = document.createElement('button');
            
            // set the content 
            authorSec.innerText = `Author: ${array[i].author}`;
            pagesSec.innerText = `Pages: ${array[i].pages} `;
            titleSec.innerText = `Title: ${array[i].title}`;    
            readSec.innerText =  `${array[i].read}`;
            readHeader.innerText = 'Read Status: ';

            // add classes
            authorSec.setAttribute('class', 'card-info');
            readHeader.setAttribute('class', 'readStatus');
            pagesSec.setAttribute('class', 'card-info');
            titleSec.setAttribute('class', 'card-info');
            readSec.setAttribute('class', `${array[i].read}`);
            header.innerText = `Book`;

            // append sections to the card
            newCard.appendChild(header);
            newCard.appendChild(authorSec);
            newCard.appendChild(titleSec);
            newCard.appendChild(pagesSec);
            newCard.appendChild(readHeader);
            newCard.appendChild(readSec);

            // read status button
           readSec.addEventListener('click', readStatus);

            // add delete button
            let deleteBtn = document.createElement('img');
            deleteBtn.setAttribute('src', './assets/trash-bin.svg');
            deleteBtn.addEventListener('click', deleteCard);
            newCard.appendChild(deleteBtn);

            // append the card to the display
            display.appendChild(newCard);
        }
        // clear the input's
        authorInput.value = '';
        pagesInput.value = '';
        titleInput.value = '';
    }

     function deleteCard(e) {
        let index = e.target.dataset.index;
        myLibrary.splice(index, 1);
        e.target.parentElement.remove(); 
        let allCards = Array.from(document.querySelectorAll('.card'));
        for(let a = 0; a < allCards.length; a++) {
            allCards[a].setAttribute('data-index', a);
        }
     }; 

    function readStatus(e) {
        if(e.target.id !== 'read') {
            let i = e.target.parentElement.dataset.index;
            if(e.target.className === 'read') {
                e.target.className = 'not-read';
                e.target.innerText = 'not read';
                myLibrary[i].read = 'not-read';
            } else {
                e.target.className = 'read';
                e.target.innerText = 'read';
                myLibrary[i].read = "read";
            }
     } else if (e.target.id === "read") {
        if(e.target.className === 'read') {
            e.target.className = 'not-read';
            e.target.innerText = 'not read';
        } else {
            e.target.className = 'read';
            e.target.innerText = 'read';
        }
     }
    };
})();