import express from "express";
import AuthController from "../controllers/AuthController";
import { ValidationSchema, Schemas } from "../middlewares/Validation";

const router = express.Router();

router.post(
  "/register",
  ValidationSchema(Schemas.user.create),
  AuthController.handleRegister
);

export = router;
