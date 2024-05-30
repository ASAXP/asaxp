import { ZodError, z } from "zod";
import { Progress } from "./progress";
import { ZodSafeParseType } from "../../../utils/zodParseErrorType";

export const progress: z.Schema<Progress> = z.object({
  id: z.number(),
  name: z.string(),
});

// type ParseProgress = (arg: unknown) => Progress;

export const parseProgress = (arg: unknown) => {
  const result = progress.safeParse(arg);
  if (!result.success) {
    console.log(result.error.issues);
  }
  return result.data;
};
