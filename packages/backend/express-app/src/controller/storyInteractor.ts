import { StoryRepositoryInterface } from "@repository/storyRepository.interface";
import { Story } from "@domain/story/entities/story";

const storyController = {
  async getStoryList({
    getList,
  }: {
    getList: StoryRepositoryInterface["getList"];
  }) {
    const result = await getList();
    return result;
  },
  async getStoryById(
    { getById }: { getById: StoryRepositoryInterface["getById"] },
    { id }: { id: number },
  ) {
    const result = await getById(id);
    return result;
  },
  async create(
    { createStory }: { createStory: StoryRepositoryInterface["create"] },
    { story }: { story: Omit<Story, "id"> },
  ) {
    const result = await createStory(story);
    return result;
  },
  async update(
    { updateStory }: { updateStory: StoryRepositoryInterface["update"] },
    { story }: { story: Story },
  ) {
    const result = await updateStory(story);
    return result;
  },
  async delete(
    { deleteStory }: { deleteStory: StoryRepositoryInterface["delete"] },
    { id }: { id: number },
  ) {
    const result = await deleteStory(id);
    return result;
  },
};

export { storyController };
