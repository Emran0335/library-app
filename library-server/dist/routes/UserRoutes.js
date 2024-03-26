"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const Validation_1 = require("../middlewares/Validation");
const router = express_1.default.Router();
router.get("/", UserController_1.default.getAllUsersHandler);
router.get("/:userId", (0, Validation_1.ValidateSchema)(Validation_1.Schemas.user.userId, "params"), UserController_1.default.getUserHandler);
module.exports = router;
