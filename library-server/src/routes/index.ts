import { Express } from "express";
// name import 
import authRoutes from "./AuthRoutes";


export function registerRoutes(app:Express) {
    app.use("/auth", authRoutes);
}
