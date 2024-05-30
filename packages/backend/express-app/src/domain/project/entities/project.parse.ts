import { z } from "zod";
import { Project } from "./project";

export const project: z.Schema<Project> = z.object({
  id: z.number(),
});

// type ParseProject = (arg: unknown) => Project;

export const ParseProject = (arg: unknown) => {
  const result = project.safeParse(arg);
  if (!result.success) {
    console.log(result.error.issues);
  }
  return result.data;
};
