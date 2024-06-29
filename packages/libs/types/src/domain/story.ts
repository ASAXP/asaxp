import { z } from "zod";

// type Story = {
//   id?: number;
//   사용자 스토리의 세 가지 종류
//   type: "epic" | "story" | "spike" | undefined;
//   100자 정도로 스토리 설명 : 사용자는 ~~를 할 수 있다.
//   description: string;
//   스토리의 상세내용
//   content?: string;
//   story point
//   point?: number;
//   담당자
//   assignee?: string;
//   부모 스토리
//   parentStory?: Story;
//   자식 스토리
//   childStories?: Story[];
// };

const baseStorySchema = z.object({
  id: z.number().optional(),
  type: z.enum(["epic", "story", "spike"]),
  description: z.string(),
  content: z.string().optional(),
  point: z.number().optional(),
  assignee: z.string().optional(),
});

type StoryType = z.infer<typeof baseStorySchema> & {
  parentStory?: StoryType;
  childStories?: StoryType[];
};

const storySchema: z.ZodSchema<StoryType> = baseStorySchema.extend({
  parentStory: z.lazy(() => storySchema).optional(),
  childStories: z.array(z.lazy(() => storySchema)).optional(),
});

const parseStory = (arg: unknown) => {
  const result = storySchema.parse(arg);
  return result;
};

const StorySchemaDAO = z.object({
  id: z.number().optional(),
  parent_id: z.number().optional(),
  type: z.enum(["epic", "story", "spike"]),
  description: z.string(),
  content: z.string().optional(),
  point: z.number().optional(),
  assignee_id: z.string().optional(),
});

type StoryDAOType = z.infer<typeof StorySchemaDAO>;

export { parseStory, storySchema, StoryType, StorySchemaDAO, StoryDAOType };
