import { z } from "zod";
import { Project } from "./project";

export const project: z.Schema<Project> = z.object({
  id: z.number(),
});

type ParseProject = (arg: unknown) => Project;

export const ParseProject: ParseProject = (arg: unknown) => project.parse(arg);
