import { storyRepository } from "@repository/inMemory/storyRepository";
import { StoryRepositoryInterface } from "@repository/storyRepository.interface";
import { Story } from "@domain/story/entities/story";

const storyInteractor = {
  async getStoryList(getList: StoryRepositoryInterface<Story>["getList"]) {
    const result = await storyRepository.getList();
    return result;
  },
  async getStoryById(id: number) {
    const result = await storyRepository.getById(id);
    return result;
  },
  async create(story: Omit<Story, "id">) {
    const result = await storyRepository.create(story);
    return result;
  },
  async update(newStory: Story) {
    const result = await storyRepository.update(newStory);
  },
  async delete(id: number) {
    const result = await storyRepository.delete(id);
  },
};

export { storyInteractor };
