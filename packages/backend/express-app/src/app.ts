import express from "express";
// import helmet from "helmet";
import { storyRouter } from "@routes/storyRouter";
import globalErrorHandler from "./middleware/globalErrorHandler";

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
