
let inputNameSelect = document.querySelector('#BookName');
let inputAuthor = document.querySelector('#authorName');
let inputPages = document.querySelector('#pages');
let rightPanel = document.querySelector('.rightPanel');
let table = document.querySelector('.table');

//empty array 
let mylibrary=[];

//constructor
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
    btn.textContent='Remove';
    
    for (i in mylibrary){
        
        div.textContent= mylibrary[i].name +' by '+mylibrary[i].author+ ' ' + mylibrary[i].pages +'Pages';
        div.style.color= 'white';
        // btn.classList.remove(`Remove${i-1}`);
        // btn.classList.add(`Remove${i}`);
        div.setAttribute('id', `div${i}`);
        btn.setAttribute('onclick', `remove(div${i})`);
        
        table.appendChild(div);
        div.appendChild(btn);   
    }  
    
}


//to remove the added item
function remove(n){
    n.remove();
    
} ;
