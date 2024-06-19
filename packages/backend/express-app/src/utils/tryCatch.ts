import { NextFunction, Request, Response } from "express";

type CallbackFunctionType = (req: Request, res: Response) => void;

// try / catch문 계속 작성 안해도 되게 만들었어. 인수로 controller 넘겨
export default function wrapApi(controller: CallbackFunctionType) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res);
    } catch (error: unknown) {
      next(error);
    }
  };
}
