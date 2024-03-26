import expres from "express";
import BookController from "../controllers/BookController";
import { Schemas, ValidateSchema } from "../middlewares/Validation";

const router = expres.Router();

router.get("/", BookController.getAllBooks);
router.post(
  "/",
  ValidateSchema(Schemas.book.create, "body"),
  BookController.createBook
);


export = router;
