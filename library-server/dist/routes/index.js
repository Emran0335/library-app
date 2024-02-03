"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
// name import 
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
function registerRoutes(app) {
    app.use("/auth", AuthRoutes_1.default);
}
exports.registerRoutes = registerRoutes;
