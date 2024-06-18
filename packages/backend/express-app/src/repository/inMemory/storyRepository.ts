import { Story } from "@domain/story/entities/story";
import { StoryRepositoryInterface } from "@repository/storyRepository.interface";

const mockStoryList: Story[] = [
  {
    id: 0,
    type: "epic",
    description: "test",
    content: "",
    point: 2,
    assignee: null,
    parentStory: null,
    childStories: [],
  },
  {
    id: 1,
    type: "epic",
    description: "test",
    content: "",
    point: 2,
    assignee: null,
    parentStory: null,
    childStories: [],
  },
  {
    id: 2,
    type: "epic",
    description: "test",
    content: "",
    point: 2,
    assignee: null,
    parentStory: null,
    childStories: [],
  },
];

let id = 3;
const storyRepository: StoryRepositoryInterface = {
  async getList() {
    return Promise.resolve(mockStoryList);
  },
  async getById(id: number) {
    return Promise.resolve(mockStoryList[id] ?? undefined);
  },
  async create(story: Omit<Story, "id">) {
    const newId = ++id;
    return Promise.resolve({
      ...story,
      id: newId,
    });
  },
  async update(item) {
    return Promise.resolve(item);
  },
  async delete(id: number) {
    return Promise.resolve(undefined);
  },
};

export { storyRepository };
