export type StoryRepositoryType<T> = {
  // getStory: () => Promise<T | undefined>;
  getStoryList: () => Promise<T[] | undefined>;
  // createStory: (story: T) => void;
  // updateStory: (story: T) => void;
  // deleteStory: (id: string) => void;
};
