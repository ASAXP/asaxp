import { storyRepository } from "@repository/inMemory/storyRepository";
import { StoryRepositoryInterface } from "@repository/storyRepository.interface";
import { Story } from "@domain/story/entities/story";

const storyInteractor = {
  async getStoryList(getList: StoryRepositoryInterface<Story>["getList"]) {
    const result = await storyRepository.getList();
    return result;
  },
  async getStoryById(
    { getById }: { getById: StoryRepositoryInterface<Story>["getById"] },
    { id }: { id: number },
  ) {
    const result = await storyRepository.getById(id);
    return result;
  },
  async create(
    { createStory }: { createStory: StoryRepositoryInterface<Story>["create"] },
    { story }: { story: Omit<Story, "id"> },
  ) {
    const result = await createStory(story);
    return result;
  },
  async update(
    { updateStory }: { updateStory: StoryRepositoryInterface<Story>["update"] },
    { story }: { story: Story },
  ) {
    const result = await updateStory(story);
    return result;
  },
  async delete(
    { deleteStory }: { deleteStory: StoryRepositoryInterface<Story>["delete"] },
    { id }: { id: number },
  ) {
    const result = await deleteStory(id);
    return result;
  },
};

export { storyInteractor };
