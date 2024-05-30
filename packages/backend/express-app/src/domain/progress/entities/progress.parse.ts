import { z } from "zod";
import { Progress } from "./progress";

export const progress: z.Schema<Progress> = z.object({
  id: z.number(),
  name: z.string(),
});

type ParseProgress = (arg: unknown) => Progress;

export const parseProgress: ParseProgress = (arg: unknown) =>
  progress.parse(arg);
