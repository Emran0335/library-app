import React from "react";
import { Book } from "../../../../models/Book";

import './BookCard.css'

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
    
  return (
    <div className="book-card" id="book-card">
      <img src={book.cover} alt="book image" className="book-card-cover" />
      <div className="book-card-info">
        <h1 className="book-card-title">{book.title}</h1>
        <h3 className="book-card-author">{book.authors}</h3>
        <p className="book-card-description">{book.description}</p>
      </div>
    </div>
  );
};
