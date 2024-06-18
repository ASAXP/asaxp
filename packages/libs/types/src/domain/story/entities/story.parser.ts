import { z } from "zod";

const storyBase = z.object({
  id: z.number(),
  type: z.union([z.literal("epic"), z.literal("story"), z.literal("spike")]),
  description: z.string(),
  content: z.string(),
  point: z.number(),
  assignee: z.string().nullable(),
});

export const story = storyBase.extend({
  parentStory: z.lazy(() => storyBase).nullable(),
  childStories: z.lazy(() => storyBase.array()).nullable(),
});

export const parseStory = (arg: unknown) => {
  const result = story.parse(arg);
  return result;
};
