import { Request, Response } from "express";
import { findAllUsers, findUserById } from "../services/UserService";
import { UserDoesNotExistError } from "../utils/LibraryErrors";

async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Unable to retrieve users at this time",
    });
  }
}

async function getUserHandler(req: Request, res: Response) {
  const userId = req.params.userId;
  try {
    const user = await findUserById(userId);
    res.status(200).json({
      message: "User found successfully",
      user,
    });
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({
        message: "User requested does not exist",
      });
    } else {
      res.status(500).json({
        message: "Could not find user",
        error: error.message,
      });
    }
  }
}

export default { getAllUsersHandler,getUserHandler };
