import {
  GetStoryListType,
  GetStoryByIdType,
  UpdateStoryType,
  CreateStoryType,
  DeleteStoryType,
} from "@repository/storyRepository.interface";
import { Story } from "@domain/story/entities/story";

const storyController = {
  async getStoryList({ getList }: { getList: GetStoryListType }) {
    const result = await getList();
    return result;
  },
  async getStoryById(
    { getById }: { getById: GetStoryByIdType },
    { id }: { id: number },
  ) {
    const result = await getById(id);
    return result;
  },
  async create(
    { createStory }: { createStory: CreateStoryType },
    { story }: { story: Omit<Story, "id"> },
  ) {
    const result = await createStory(story);
    return result;
  },
  async update(
    { updateStory }: { updateStory: UpdateStoryType },
    { story }: { story: Story },
  ) {
    const result = await updateStory(story);
    return result;
  },
  async delete(
    { deleteStory }: { deleteStory: DeleteStoryType },
    { id }: { id: number },
  ) {
    const result = await deleteStory(id);
    return result;
  },
};

export { storyController };
