import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import globalErrorHandler from "./middleware/globalErrorHandler";

dotenv.config();

const app = express();

app.use(express.json());

app.use(helmet());

app.use(globalErrorHandler);

console.log("hello express");
