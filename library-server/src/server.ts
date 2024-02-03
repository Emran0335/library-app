import cors from "cors";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "./config/index";

// all routes
import { registerRoutes } from "./routes/index";

const PORT = config.server.PORT;
const app: Express = express();

// middlewares
app.use(express.json());
app.use(cors());

// IFFI-> Immediate Invoked Function
(async function startUp() {
  try {
    await mongoose.connect(config.mongo.URI, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });
    console.log("Connection to MongoDB successfully made");

    registerRoutes(app);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Could not make a connection to the database");
  }
})();


