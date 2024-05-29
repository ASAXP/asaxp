import express from "express";
import helmet from "helmet";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.use(helmet());

app.use(globalErrorHandler);

console.log("hello express");
