"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// all routes
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.get("/auth", (request, response) => {
    response.status(200).send({
        msg: "Hello World"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
