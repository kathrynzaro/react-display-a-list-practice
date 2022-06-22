import React from 'react';
import Book from './Book';

export default function BooksList({ books }) {
  return (
    <div className='books-list'>
      {
        books.map((book, i) => {
          return <Book
            {...book}
            key={book.title + i + book.id} />;
        })
      }
    </div>
  );
}
