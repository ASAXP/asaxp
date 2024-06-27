import express from "express";
// import helmet from "helmet";
import { storyRouter } from "@routes/storyRouter";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("get root");
});

app.use(storyRouter);

app.use(globalErrorHandler);

app.listen(8080, () => {
  console.log("app start!");
});
