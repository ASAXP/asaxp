import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import globalErrorHandler from "./middleware/globalErrorHandler";
import storyRouter from "@routes/story.route";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("get root");
});

app.use(storyRouter);

app.use(globalErrorHandler);

app.listen(8080, () => {
  console.log("app start!");
});
