"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookService_1 = require("../services/BookService");
// create book using pot method
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let book = req.body;
        try {
            let savedBook = yield (0, BookService_1.registerBook)(book);
            res.status(201).json({
                message: "Book created successfully",
                savedBook,
            });
        }
        catch (error) {
            res.status(500).json({
                message: "Unable to create or save book at this time",
                error,
            });
        }
    });
}
// get all books using get method
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let books = yield (0, BookService_1.findAllBooks)();
            res.status(200).json({
                message: "Retrieved all books",
                count: books.length,
                books,
            });
        }
        catch (error) {
            res.status(500).json({
                message: "Unable to retrieve books at this time",
                error,
            });
        }
    });
}
exports.default = {
    getAllBooks,
    createBook,
};
