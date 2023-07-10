export const handleFormSubmit = (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;

  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.innerHTML = `
        <h3>${title}</h3>
        <p>Author: ${author}</p>
        <p>Genre: ${genre}</p>
        <p>Year: ${year}</p>
        <button class="remove-button">Remove</button>
      `;

  const booksList = document.getElementById('books-list');
  booksList.appendChild(bookElement);

  const addBookForm = document.getElementById('add-book-form');
  addBookForm.reset();

  const removeButton = bookElement.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    bookElement.remove();
  });
};

export default {
  handleFormSubmit,
};
