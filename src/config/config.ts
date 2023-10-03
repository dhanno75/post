import * as dotenv from "dotenv";

dotenv.config();

const MONGO_USER = process.env.MONGO_USERNAME;
const MONGO_PASS = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.q1vefty.mongodb.net/posts?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: PORT,
  },
};
