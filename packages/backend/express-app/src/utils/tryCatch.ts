import { RequestHandler, NextFunction, Request, Response } from "express";

type CallbackFunctionType = (req: Request, res: Response) => void;

// try / catch문 계속 작성 안해도 되게 만들었어. 인수로 controller 넘겨
export default function wrapApi(controller: CallbackFunctionType) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // eslint-disable-next-line no-console
      console.log("req.body", req.body);
      controller(req, res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log("req.error", error);
      next(error);
    }
  };
}

interface PromiseRequestHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}

export function wrap(fn: PromiseRequestHandler): RequestHandler {
  return (req, res, next) => fn(req, res, next).catch(next);
}
