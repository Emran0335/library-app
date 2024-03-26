import { Book } from "../../../models/Book";

export function getRandomBookByGenre(genre: string, books: Book[]) {
  const filteredBooks = books.filter((book) => book.genre === genre);
  
  const randomedBooks: Book[] = [];

  if (filteredBooks.length <10) return filteredBooks;

  while (randomedBooks.length !== 10) {
    const index = Math.floor(Math.random() * filteredBooks.length);

    if (
      !randomedBooks.some((b) => b["barcode"] === filteredBooks[index].barcode)
    )
      randomedBooks.push(filteredBooks[index]);
  }
  return randomedBooks;
}
