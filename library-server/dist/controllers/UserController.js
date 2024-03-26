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
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
const LibraryErrors_1 = require("../utils/LibraryErrors");
function getAllUsersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, UserService_1.findAllUsers)();
            res.status(200).json({
                message: "Users retrieved successfully",
                users,
            });
        }
        catch (error) {
            res.status(500).json({
                message: "Unable to retrieve users at this time",
            });
        }
    });
}
function getUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        try {
            const user = yield (0, UserService_1.findUserById)(userId);
            res.status(200).json({
                message: "User found successfully",
                user,
            });
        }
        catch (error) {
            if (error instanceof LibraryErrors_1.UserDoesNotExistError) {
                res.status(404).json({
                    message: "User requested does not exist",
                });
            }
            else {
                res.status(500).json({
                    message: "Could not find user",
                    error: error.message,
                });
            }
        }
    });
}
exports.default = { getAllUsersHandler, getUserHandler };
