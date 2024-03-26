// DAON-> DATA ACCESS OBJECTS
import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../models/User";

export interface IUserModel extends IUser, Document {
  id: string;
}

const userSchema: Schema = new Schema(
  {
    type: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<IUserModel>("User", userSchema);
