"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const BookRoutes_1 = __importDefault(require("./BookRoutes"));
function registerRoutes(app) {
    app.use("/auth", AuthRoutes_1.default);
    app.use("/users", UserRoutes_1.default);
    app.use("/book", BookRoutes_1.default);
}
exports.registerRoutes = registerRoutes;
