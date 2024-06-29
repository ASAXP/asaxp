import { Request, Response, NextFunction } from "express";
import { HttpError } from "@utils/Errors";

import { ZodError } from "zod";
import { successFalse } from "@utils/outcomeType";

function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof HttpError) {
    res.status(err.status).json(successFalse(err.message));
    return;
  } else if (err instanceof ZodError) {
    res.status(400).json(successFalse(err.toString()));
    return;
  }
  res.status(500).json(successFalse("Internal Server Error"));
  return;
}

export default globalErrorHandler;
