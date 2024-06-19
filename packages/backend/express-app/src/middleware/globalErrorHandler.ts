import { Request, Response, NextFunction } from "express";
import { HttpError } from "@utils/Errors";

import { ZodError } from "zod";

function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof HttpError) {
    res.status(err.status).json(err.message);
    return;
  } else if (err instanceof ZodError) {
    res.status(400).json(err.issues);
    return;
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
  return;
}

export default globalErrorHandler;
