"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.findAllUsers = void 0;
// error handling
const LibraryErrors_1 = require("../utils/LibraryErrors");
const UserDao_1 = __importDefault(require("../daos/UserDao"));
// get all users from the database;
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UserDao_1.default.find();
            return users;
        }
        catch (error) {
            return [];
        }
    });
}
exports.findAllUsers = findAllUsers;
// get only the user through matching the _id from the db
function findUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserDao_1.default.findById(userId);
            if (user)
                return user;
            throw new LibraryErrors_1.UserDoesNotExistError("User does not exist with this ID");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findUserById = findUserById;
