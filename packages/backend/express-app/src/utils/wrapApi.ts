import { RequestHandler, NextFunction, Request, Response } from "express";

export type PromiseRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export default function wrapApi(
  controller: PromiseRequestHandler,
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res, next).catch((e) => next(e));
  };
}
