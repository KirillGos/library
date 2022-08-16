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
    display.innerText = '';
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
            
            newCard.setAttribute('data-index', i);
            // create card sections
            let header = document.createElement('h1');
            let authorSec = document.createElement('p');
            let pagesSec = document.createElement('p');
            let titleSec = document.createElement('p');
            let readSec = document.createElement('p');
            
            // set the content 
            authorSec.innerText = `Author: ${myLibrary[i].author}`;
            pagesSec.innerText = `Pages: ${myLibrary[i].pages} `;
            titleSec.innerText = `Title: ${myLibrary[i].title}`;    
            readSec.innerText = `Read: ${myLibrary[i].read}`;

            // add classes
            authorSec.setAttribute('class', 'card-info');
            pagesSec.setAttribute('class', 'card-info');
            titleSec.setAttribute('class', 'card-info');
            readSec.setAttribute('class', 'card-info');
            header.innerText = `Book`;
            // append sections to the card
            newCard.appendChild(header);
            newCard.appendChild(authorSec);
            newCard.appendChild(titleSec);
            newCard.appendChild(pagesSec);
            newCard.appendChild(readSec);
            // add delete button
            let deleteBtn = document.createElement('img');
            deleteBtn.setAttribute('src', './assets/trash-bin.svg');
                deleteBtn.addEventListener('click', () => {
                    let index = newCard.dataset.index;
                    myLibrary.splice(index, 1);
                    deleteBtn.parentElement.remove(); 
                    let allCards = Array.from(document.querySelectorAll('.card'));
                    for(let a = 0; a < allCards.length; a++) {
                        allCards[a].setAttribute('data-index', a);
                        
                    }
            });
            newCard.appendChild(deleteBtn);

            // append the card to the display
            display.appendChild(newCard);
        }
        // clear the input's
        authorInput.value = '';
        pagesInput.value = '';
        titleInput.value = '';
        readInput.value = '';   
});
 

// // search 

// const search = document.querySelector('#search');
// search.addEventListener('keyup', filterCards);

// function filterCards(e) {
//     const text = e.target.value.toLowerCase();
//     const cardItem = document.getElementsByClassName('card-info');
//     Array.from(cardItem).forEach(item => {
//         let itemName = item.textContent;
//         console.log(itemName)
//         if(itemName.toLowerCase().indexOf(text) != -1) {
//             item.parentElement.style.display = 'grid';
//         } else {
//             item.parentElement.style.display = 'none';
//         }
//     });
// };


// default cards
let newCard = document.createElement('div');
newCard.setAttribute('class', 'card');


// create card sections
let header = document.createElement('h1');
let authorSec = document.createElement('p');
let pagesSec = document.createElement('p');
let titleSec = document.createElement('p');
let readSec = document.createElement('p');

// set the content 
authorSec.innerText = `Author: Joe Doe`;
pagesSec.innerText = `Pages: 321 `;
titleSec.innerText = `Title: The Coder`;    
readSec.innerText = `Read: yes`;

// add classes
authorSec.setAttribute('class', 'card-info');
pagesSec.setAttribute('class', 'card-info');
titleSec.setAttribute('class', 'card-info');
readSec.setAttribute('class', 'card-info');
header.innerText = `Book`;
// append sections to the card
newCard.appendChild(header);
newCard.appendChild(authorSec);
newCard.appendChild(titleSec);
newCard.appendChild(pagesSec);
newCard.appendChild(readSec);
// add delete button
let deleteBtn = document.createElement('img');
deleteBtn.setAttribute('src', './assets/trash-bin.svg');
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove(); 
});
newCard.appendChild(deleteBtn);

// append the card to the display
display.appendChild(newCard);