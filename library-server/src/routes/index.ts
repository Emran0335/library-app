import { Express } from "express";
import authRoutes from "./AuthRoutes";
import userRoutes from "./UserRoutes";
import bookRoutes from "./BookRoutes";

export function registerRoutes(app: Express) {
  app.use("/auth", authRoutes);

  app.use("/users", userRoutes);

  app.use("/book", bookRoutes);
}
