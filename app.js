const openPopUp = document.getElementById('add-book');
const submit = document.getElementById('submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const popup = document.querySelector('.pop-up');
const check = document.getElementById('check');
const books = document.querySelector('.books');
const overlay = document.getElementById('overlay');

openPopUp.addEventListener(('click'),() => {
	if (popup == null) return ;
	popup.classList.add('active1');
	overlay.style.width = "100%";
	overlay.style.height = "100%";
	overlay.style.opacity = "1";
})

document.addEventListener('click', function(event) {
	if (event.target !== popup && event.target !== openPopUp && !popup.contains(event.target)) {
		popup.classList.remove('active1');
		overlay.style.width = "0%";
		overlay.style.height = "0%";
		overlay.style.opacity = "0";
	}
});

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

submit.addEventListener('click', ()=> {
	let checkValue = check.checked ? 'read':'unread';
	console.log(checkValue);
	let newBook = new Book(title.value, author.value, pages.value, checkValue);
	const element = document.createElement('div');
	element.classList.add('book-info');
	element.innerHTML = `
	<div>${newBook.author}</div>
	<div>${newBook.title}</div>
	<div>${newBook.pages} pages</div>
	<button class="read">${newBook.read}</button>
	<button class="remove">remove</button>`
	books.appendChild(element);
	popup.classList.remove('active1');
	overlay.style.width = "0%";
	overlay.style.height = "0%";
	overlay.style.opacity = "0";
})

