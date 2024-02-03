"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUserNameOrPasswordError = exports.UnableToSaveUserError = void 0;
class UnableToSaveUserError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UnableToSaveUserError = UnableToSaveUserError;
class InvalidUserNameOrPasswordError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidUserNameOrPasswordError = InvalidUserNameOrPasswordError;
