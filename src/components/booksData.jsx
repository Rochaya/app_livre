import { useState, useEffect } from 'react';
import booksData from '../files/books.json';

const BooksData = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
      setBooks(booksData.books);
    }, []);
  
    return books;
};

export default BooksData;
