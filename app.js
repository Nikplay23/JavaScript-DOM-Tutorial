const list = document.querySelector('#book-list ul');
const forms = document.forms;

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
      }else{
            book.style.display = "none"
      }
    })
})