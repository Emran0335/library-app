import { Request, Response } from "express";
import { register } from "../services/UserService";
import { IUser } from "../models/User";
import { IUserModel } from "../daos/UserDao";
import { InvalidUserNameOrPasswordError } from "../utils/LibraryErrors";

async function handleRegister(req: Request, res: Response) {
  const user: IUser = req.body;

  try {
    const registeredUser = await register(user);

    res.status(201).json({
      message: "User registered Successfully",
      user: {
        _id: registeredUser._id,
        type: registeredUser.type,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
      },
    });
  } catch (error: any) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.status(409).json({
        message: "User with email already exists",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unable to register user at this time",
        error: error.message,
      });
    }
  }
}

export default {handleRegister};
