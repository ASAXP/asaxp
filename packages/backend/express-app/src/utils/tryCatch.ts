import { NextFunction } from "express";

export default function tryCatch(controller: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res);
    } catch (error: unknown) {
      next(error);
    }
  };
}
