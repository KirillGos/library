(function() {
    let form = document.querySelector('.form');
    let inputs = document.createElement('div');
    inputs.setAttribute('class', 'inputs');

    // h2 header 
    let inputsHeader = document.createElement('h2');
    inputsHeader.innerText = 'Enter a Book Info';
    inputs.appendChild(inputsHeader);
    function inputSectionCreate() {
        let inputSection = document.createElement('div');
        inputSection.setAttribute('class', 'input-section');
        return inputSection;
    }
    
    // author section
        let authorSec = inputSectionCreate();
        // author label
        let author = document.createElement('p');
        author.innerText = "Enter the Author";
        // author input 
        let authorInput = document.createElement('input');
        authorInput.setAttribute('id', 'author');
        authorInput.setAttribute('type', 'text');
        authorInput.setAttribute('class', 'input-1');

        authorSec.appendChild(author);
        authorSec.appendChild(authorInput);
        inputs.appendChild(authorSec);

    // title section
        let titleSec = inputSectionCreate();
        // author label
        let title = document.createElement('p');
        title.innerText = 'Enter the Title';
        // author input 
        let titleInput = document.createElement('input');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('class', 'input-2');

        titleSec.appendChild(title);
        titleSec.appendChild(titleInput);
        inputs.appendChild(titleSec);

    // pages section
        let pagesSec = inputSectionCreate();
        // pages label
        let pages = document.createElement('p');
        pages.innerText = 'Enter the number of pages';
        // pages input 
        let pagesInput = document.createElement('input');
        pagesInput.setAttribute('id', 'pages');
        pagesInput.setAttribute('type', 'number');
        pagesInput.setAttribute('class', 'input-3');

        pagesSec.appendChild(pages);
        pagesSec.appendChild(pagesInput);
        inputs.appendChild(pagesSec);

    // read section 
        let readSec = inputSectionCreate();
        // read label
        let read = document.createElement('p');
        read.innerText = 'Have You Read This Book'
        // read input 
        let readBtn = document.createElement('button');
        readBtn.setAttribute('id', 'read');
        readBtn.setAttribute('type', 'generic');
        readBtn.setAttribute('class', 'read');
        readBtn.innerText = 'read';

        readSec.appendChild(read);
        readSec.appendChild(readBtn);
        inputs.appendChild(readSec);

    // exit button 
        let exit = document.createElement('button');
        exit.setAttribute('class', 'form-exit');
        exit.innerText = 'X';
        exit.addEventListener('click', () =>  {
            form.style.display = 'none';
        });
        form.appendChild(exit);
    // create add button
        let addBtn = document.createElement('button');
        addBtn.setAttribute('id', 'add-a-book');
        addBtn.innerText = 'Add a Book';
        form.appendChild(inputs);
        form.appendChild(addBtn);
        
})();


(function() {
    // User inputs
let authorInput = document.querySelector('#author');
let readBtn = document.querySelectorAll('.read');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');
let form = document.querySelector('.form');
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
readBtn2.addEventListener('click', readSts2);
function readSts2(e) {
    if (e.target.id === "read") {
        if(e.target.className === 'read') {
            e.target.className = 'not-read';
            e.target.innerText = 'not read';
        } else {
            e.target.className = 'read';
            e.target.innerText = 'read';
        }
     }
}

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
    form.style.display = 'none';
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
            if(array[i].title !== '') {
                header.innerText = `${array[i].title}`;
            } else {
                header.innerText = `Book`;
            }
            

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
        // stats total books
        let totalBooks = document.querySelector('.amount-of-books');
        totalBooks.innerText = myLibrary.length;

        // stats total pages 
        let totalPages = document.querySelector('.total-pages');
        let notReadPages = document.querySelector('.not-read-pages-count');
        let readPages = document.querySelector('.read-pages-count');
        function getTotal() {
            let totalNotRead = 0;
            let readPagesCount = 0;
            let totalPagesCount = 0;
            for(let i = 0; i < myLibrary.length; i++) {
                totalPagesCount += Number(myLibrary[i].pages);
                if(myLibrary[i].read !== 'read') {
                    totalNotRead += Number(myLibrary[i].pages);
                } else  if(myLibrary[i].read !== 'not-read') {
                    readPagesCount += Number(myLibrary[i].pages);
                } 

            }
            notReadPages.innerText = totalNotRead;
            readPages.innerText = readPagesCount;
            totalPages.innerText = totalPagesCount;
        }
        getTotal();
        // clear the input's
        authorInput.value = '';
        pagesInput.value = '';
        titleInput.value = ''; 
        
        function readStatus(e) {
        if(e.target.id !== 'read') {
            let i = e.target.parentElement.dataset.index;
            if(e.target.className === 'read') {
                e.target.className = 'not-read';
                e.target.innerText = 'not read';
                myLibrary[i].read = 'not-read';
                getTotal();
            } else {
                e.target.className = 'read';
                e.target.innerText = 'read';
                myLibrary[i].read = "read";
                getTotal();
            }
     }
    };
         function deleteCard(e) {
            totalBooks.innerText = myLibrary.length - 1;
            let index = e.target.dataset.index;
            myLibrary.splice(index, 1);
            e.target.parentElement.remove(); 
            let allCards = Array.from(document.querySelectorAll('.card'));
            for(let a = 0; a < allCards.length; a++) {
                allCards[a].setAttribute('data-index', a);
            } 
            getTotal();
     }; 
    }

    let bringForm = document.querySelector('.bring-form');
    bringForm.addEventListener('click', bringFormFunction);
    function bringFormFunction() {
        form.style.display = 'grid';
    }
        
}) ();

