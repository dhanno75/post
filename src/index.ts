import express from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import postRouter from "./routes/postsRoutes";
import categoryRouter from "./routes/categoryRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
mongoose
  .connect(config.mongo.url)
  .then(() => console.log("Database connection successful!!!"))
  .catch((err) => console.log(err));

// Body parser
app.use(express.json());

// Rules of our API
app.use((req, res, next) => {
  // 1
  res.header("Access-Control-Allow-Origin", "*");
  // 2
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requeste-With, Content-Type, Accept, Authorization"
  );

  // 3
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");

    return res.status(200).json({});
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!!! 🙂");
});

app.use("/api", postRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () =>
  console.log(`The server is connected to port: ${PORT} ☕☕`)
);

export default app;

// 1) The requests can come from anywhere
// 2) what headers are allowed in project if they are private
// 3) If we pass in an options request, its just going to return all of the options we can use inside of the api
