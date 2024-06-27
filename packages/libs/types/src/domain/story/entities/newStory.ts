import { z } from "zod";

const baseStorySchema = z.object({
  id: z.number(),
  type: z.enum(["epic", "story", "spike"]),
  description: z.string(),
  content: z.string(),
  point: z.number(),
  assignee: z.string(),
});

type NewBaseStoryType = z.infer<typeof baseStorySchema>;

export { NewBaseStoryType, baseStorySchema };
