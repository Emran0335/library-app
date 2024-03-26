import { Request, Response } from "express";
import { findAllBooks, registerBook } from "../services/BookService";

// create book using pot method
async function createBook(req: Request, res: Response) {
  let book = req.body;

  try {
    let savedBook = await registerBook(book);
    res.status(201).json({
      message: "Book created successfully",
      savedBook,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to create or save book at this time",
      error,
    });
  }
}
// get all books using get method
async function getAllBooks(req: Request, res: Response) {
  try {
    let books = await findAllBooks();

    res.status(200).json({
      message: "Retrieved all books",
      count: books.length,
      books,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to retrieve books at this time",
      error,
    });
  }
}
export default {
  getAllBooks,
  createBook,
};
