import BookDao, { IBookModel } from "../daos/BookDao";
import { IBook } from "../models/Book";

export async function registerBook(book: IBook): Promise<IBookModel> {
  const saveBook = new BookDao(book);
  return await saveBook.save();
}

export async function findAllBooks(): Promise<IBookModel[]> {
  return await BookDao.find();
}
