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

let myLibrary = [{
    author: 'J. R. R. Tolkien',
    title: 'The Lord Of The Rings',
    pages: '1178',
    read: 'read'
}];
// read button
let readBtn2 = document.querySelector('#read');
readBtn2.addEventListener('click', () => {
    if(readBtn2.className === 'read') {
        readBtn2.className = 'not-read';
        readBtn2.innerText = 'Not Read';
    } else {
        readBtn2.className = 'read';
        readBtn2.innerText = 'Read';
    }
});

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
   myLibrary.push(this);
}


addABook.addEventListener('click', () => {
    
    display.innerText = '';
    let pages = pagesInput.value;
    let title = titleInput.value;
    let author = authorInput.value;
    let read = readBtn2.innerText.toLowerCase();
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
            let readHeader = document.createElement('p');
            let readSec = document.createElement('button');
            
            // set the content 
            authorSec.innerText = `Author: ${myLibrary[i].author}`;
            pagesSec.innerText = `Pages: ${myLibrary[i].pages} `;
            titleSec.innerText = `Title: ${myLibrary[i].title}`;    
            readSec.innerText =  `${myLibrary[i].read}`
            readHeader.innerText = 'Read Status: ' 
            // add classes
            authorSec.setAttribute('class', 'card-info');
            readHeader.setAttribute('class', 'readStatus');
            pagesSec.setAttribute('class', 'card-info');
            titleSec.setAttribute('class', 'card-info');
            readSec.setAttribute('class', `${myLibrary[i].read}`);
            header.innerText = `Book`;
            // append sections to the card
            
            newCard.appendChild(header);
            newCard.appendChild(authorSec);
            newCard.appendChild(titleSec);
            newCard.appendChild(pagesSec);
            newCard.appendChild(readHeader);
            newCard.appendChild(readSec);
            // read status button
            readSec.addEventListener('click', () => {
                if(readSec.className === 'read') {
                    readSec.className = 'not-read';
                    readSec.innerText = 'not read';
                    myLibrary[i].read = 'not-read';
                } else {
                    readSec.className = 'read';
                    readSec.innerText = 'read';
                    myLibrary[i].read = "read";
                }
            });
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





