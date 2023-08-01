import React from 'react';
import BooksData from './booksData';

const HomePage = ({ searchTerm }) => {
    const books = BooksData();

    const filteredBooks = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.categories.some((category) =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          book.authors.some((author) =>
            author.toLowerCase().includes(searchTerm.toLowerCase())
          )
    );

    return (
        <div>
            <h1 className='test'>Oui oui ceci est un test !</h1>
            <ul>
                {filteredBooks.map((book) => (
                  <li key={book.isbn}>
                    <h2>{book.title}</h2>
                    <p>{book.shortDescription}</p>
                    <img src={book.thumbnailUrl} alt={book.title} />
                  </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
