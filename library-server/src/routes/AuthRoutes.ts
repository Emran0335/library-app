import express from "express";
import AuthController from "../controllers/AuthController";
import { ValidateSchema, Schemas } from "../middlewares/Validation";

const router = express.Router();

router.post(
  "/register",
  ValidateSchema(Schemas.user.create, "body"),
  AuthController.handleRegister
);
router.post(
  "/login",
  ValidateSchema(Schemas.user.login, "body"),
  AuthController.handleLogin
);

export = router;
