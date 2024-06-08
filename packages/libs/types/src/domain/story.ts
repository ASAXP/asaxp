import { z } from "zod";

export type Story = {
  id: number;
  // 사용자 스토리의 세 가지 종류
  type: "epic" | "story" | "spike";
  // 100자 정도로 스토리 설명 : 사용자는 ~~를 할 수 있다.
  description: string;
  // 스토리의 상세내용
  content: string;
  // story point
  point: number;
  // 담당자
  assignee?: string;
  // 부모 스토리
  parentStory?: Story;
  // 자식 스토리
  childStories?: Story[];
};

const storySchema: z.ZodSchema<Story> = z.lazy(() =>
  z.object({
    id: z.number(),
    type: z.enum(["epic", "story", "spike"]),
    description: z.string(),
    content: z.string(),
    point: z.number(),
    assignee: z.string().optional(),
    parentStory: storySchema.optional(),
    childStories: storySchema.array().optional(),
  }),
);

// export type Story = z.infer<typeof story>;

export const parseStory = (arg: unknown) => {
  const result = storySchema.parse(arg);
  return result;
};
