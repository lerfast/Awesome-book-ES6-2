import { showBooksSection, showAddBookSection, showContactSection } from './modules/navigation.js';
import { handleFormSubmit } from './modules/books.js';
import displayCurrentDate from './modules/dates.js';

const booksLink = document.getElementById('books-link');
const addBookLink = document.getElementById('add-book-link');
const contactLink = document.getElementById('contact-link');
const addBookForm = document.getElementById('add-book-form');

booksLink.addEventListener('click', showBooksSection);
addBookLink.addEventListener('click', showAddBookSection);
contactLink.addEventListener('click', showContactSection);
addBookForm.addEventListener('submit', handleFormSubmit);

displayCurrentDate();
showBooksSection();
