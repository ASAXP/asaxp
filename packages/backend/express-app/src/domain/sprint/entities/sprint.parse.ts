import { z } from "zod";
import { Sprint } from "./sprint";

export const sprint: z.Schema<Sprint> = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  cycle: z.number(),
  beginDate: z.date(),
  endDate: z.date(),
});

// type ParseSprint = (arg: unknown) => Sprint;

export const parseSprint = (arg: unknown) => {
  const result = sprint.safeParse(arg);
  if (!result.success) {
    console.log(result.error.issues);
  }
  return result.data;
};
