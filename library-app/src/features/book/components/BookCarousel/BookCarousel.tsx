import React, { useState } from "react";
import { Book } from "../../../../models/Book";
import { BookCard } from "../../../book/index";

import "./BookCarousel.css";

interface BookCarouselProps {
  books: Book[];
}

export const BookCarousel: React.FC<BookCarouselProps> = ({ books }) => {
  console.log(books)
  const [order, setOrder] = useState<Book[]>(books);
  console.log(order);
  return (
    <div className="book-carousel">
      <div className="book-carousel-left-button">{`<`}</div>
      <div className="book-carousel-right-button">{`>`}</div>
      {order.map((item)=> (
        <BookCard key={item.barcode} book={item}/>
      ))}
    </div>
  );
};
