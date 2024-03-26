import express from "express";

import UserController from "../controllers/UserController";
import { Schemas, ValidateSchema } from "../middlewares/Validation";

const router = express.Router();

router.get("/", UserController.getAllUsersHandler);
router.get(
  "/:userId",
  ValidateSchema(Schemas.user.userId, "params"),
  UserController.getUserHandler
);

export = router;
