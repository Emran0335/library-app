"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_PORT = process.env.MONGO_PORT
    ? Number(process.env.MONGO_PORT)
    : 38017;
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/libDB`;
const PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 5000;
const ROUNDS = process.env.ROUNDS
    ? Number(process.env.ROUNDS)
    : Math.floor(Math.random() * 11);
exports.config = {
    mongo: {
        URI: MONGO_URI,
    },
    server: {
        PORT: PORT,
        rounds: ROUNDS,
    },
};
