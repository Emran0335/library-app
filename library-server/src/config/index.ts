import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";

const MONGO_PORT: number = process.env.MONGO_PORT
  ? Number(process.env.MONGO_PORT)
  : 38017;

const MONGO_URI: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/libDB`;

const PORT: number = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 5000;

const ROUNDS = process.env.ROUNDS
  ? Number(process.env.ROUNDS)
  : Math.floor(Math.random() * 11);

export const config = {
  mongo: {
    URI: MONGO_URI,
  },
  server: {
    PORT: PORT,
    rounds: ROUNDS,
  },
};
