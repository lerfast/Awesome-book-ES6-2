export const showBooksSection = () => {
  const booksSection = document.getElementById('books-section');
  const addBookSection = document.getElementById('add-book-section');
  const contactSection = document.getElementById('contact-section');

  booksSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const showAddBookSection = () => {
  const booksSection = document.getElementById('books-section');
  const addBookSection = document.getElementById('add-book-section');
  const contactSection = document.getElementById('contact-section');

  booksSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
};

export const showContactSection = () => {
  const booksSection = document.getElementById('books-section');
  const addBookSection = document.getElementById('add-book-section');
  const contactSection = document.getElementById('contact-section');

  booksSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
};
