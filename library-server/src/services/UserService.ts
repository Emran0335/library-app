import bcrypt from "bcrypt";
import { config } from "../config";

// error handling
import { UserDoesNotExistError } from "../utils/LibraryErrors";

import UserDao, { IUserModel } from "../daos/UserDao";

// get all users from the database;
export async function findAllUsers(): Promise<IUserModel[]> {
  try {
    const users = await UserDao.find();
    return users;
  } catch (error) {
    return [];
  }
}

// get only the user through matching the _id from the db
export async function findUserById(userId: string): Promise<IUserModel> {
  try {
    const user = await UserDao.findById(userId);
    if (user) return user;

    throw new UserDoesNotExistError("User does not exist with this ID");
  } catch (error: any) {
    throw error;
  }
}
