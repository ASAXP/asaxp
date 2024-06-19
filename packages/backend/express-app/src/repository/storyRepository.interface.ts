import { Story } from "@domain/story/entities/story";

type GetStoryListType = () => Promise<Story[] | undefined>;
type GetStoryByIdType = (id: number) => Promise<Story | undefined>;
type CreateStoryType = (item: Omit<Story, "id">) => Promise<Story | number>;
type UpdateStoryType = (item: Story) => Promise<Story | undefined | number>;
type DeleteStoryType = (id: number) => Promise<undefined | number>;

export {
  GetStoryListType,
  GetStoryByIdType,
  CreateStoryType,
  UpdateStoryType,
  DeleteStoryType,
};
