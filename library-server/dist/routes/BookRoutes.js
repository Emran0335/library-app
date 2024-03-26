"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const BookController_1 = __importDefault(require("../controllers/BookController"));
const Validation_1 = require("../middlewares/Validation");
const router = express_1.default.Router();
router.get("/", BookController_1.default.getAllBooks);
router.post("/", (0, Validation_1.ValidateSchema)(Validation_1.Schemas.book.create, "body"), BookController_1.default.createBook);
module.exports = router;
