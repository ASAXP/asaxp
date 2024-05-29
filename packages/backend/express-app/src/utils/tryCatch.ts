import { NextFunction } from "express";

// try / catch문 계속 작성 안해도 되게 만들었어. 인수로 controller 넘겨
export default function tryCatch(controller: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res);
    } catch (error: unknown) {
      next(error);
    }
  };
}
