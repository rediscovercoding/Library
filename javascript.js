
let inputNameSelect = document.querySelector('#BookName');
let inputAuthor = document.querySelector('#authorName');
let inputPages = document.querySelector('#pages');
let rightPanel = document.querySelector('.rightPanel');
let table = document.querySelector('.table');

//empty array 
let mylibrary=[];

//constructor (not very useful as this can be done in one line code on line 25)
function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
    
}

//to insert book in the empty array
function inputBook(){
    
    let bookName = inputNameSelect.value;
    let bookauthor = inputAuthor.value;
    let noPages = inputPages.value;
    //let newBookObject= {BookName: bookName, Author: bookauthor, Pages: noPages}; //This code works the same as the next line code
    let newBookObject = new Book(bookName, bookauthor, noPages);
    mylibrary.push(newBookObject);
    
    displayMyLibrary();

}
//Below is the way to display the array in a new way on the screen/
function displayMyLibrary(){
    let div= document.createElement('div');
    let btn= document.createElement('button');
    let btn1= document.createElement('button');
    btn.textContent='Remove';
    btn1.textContent= 'Read';

    for (i in mylibrary){
        
        div.textContent= mylibrary[i].name +  ' \r\n by \r\n'+  mylibrary[i].author+ ' ' + mylibrary[i].pages +'Pages';
        div.style.color= 'white';
        // btn.classList.remove(`Remove${i-1}`);
        // btn.classList.add(`Remove${i}`);
        div.setAttribute('id', `div${i}`);
        btn.setAttribute('onclick', `remove(div${i})`);
        
        btn1.setAttribute('onclick', `read(${i})`);
        btn1.setAttribute('id',`readButton${i}`);
        table.appendChild(div);
        div.appendChild(btn);   
        div.appendChild(btn1);
    }  
    
}


//to remove the added item
function remove(n){
    n.remove();
    
} ;


//to change color of read: takes the number of the clicked Read button in g and then finds that button and toogles classes
function read(g) {
    let readButton = document.querySelector(`#readButton${g}`);
    readButton.classList.toggle("green");
    readButton.classList.toggle('red');
}