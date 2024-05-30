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

type ParseSprint = (arg: unknown) => Sprint;

export const parseSprint: ParseSprint = (arg: unknown) => sprint.parse(arg);
