"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const Validation_1 = require("../middlewares/Validation");
const router = express_1.default.Router();
router.post("/register", (0, Validation_1.ValidationSchema)(Validation_1.Schemas.user.create), AuthController_1.default.handleRegister);
module.exports = router;
