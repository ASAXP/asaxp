import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/CustomError";

function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export default globalErrorHandler;
