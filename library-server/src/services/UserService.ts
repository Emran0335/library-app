import bcrypt from "bcrypt";
import { config } from "../config";

// error handling
import {
  InvalidUserNameOrPasswordError,
  UnableToSaveUserError,
} from "../utils/LibraryErrors";

import UserDao, { IUserModel } from "../daos/UserDao";
import { IUser } from "../models/User";

// register a user
export async function register(user: IUser): Promise<IUserModel> {
  const ROUNDS = config.server.rounds;

  try {
    const hashedPassword = await bcrypt.hash(user.password, ROUNDS);

    const saved = new UserDao({
      ...user,
      password: hashedPassword,
    });

    return await saved.save();
  } catch (error: any) {
    throw new UnableToSaveUserError(error.message);
  }
}

// login a user
export async function login(credentials: {
  email: string;
  password: string;
}): Promise<IUserModel> {
  const { email, password } = credentials;

  try {
    const user = await UserDao.findOne({ email });

    if (!user) {
      throw new InvalidUserNameOrPasswordError("Invalid username or password");
    } else {
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        return user;
      } else {
        throw new InvalidUserNameOrPasswordError(
          "Invalid username or password"
        );
      }
    }
  } catch (error: any) {
    throw error;
  }
}
