import { Story } from "@domain/story/entities/story";
interface StoryRepositoryInterface {
  getList: () => Promise<Story[]>;
  getById: (id: number) => Promise<Story | undefined>;
  create: (item: Omit<Story, "id">) => Promise<Story | string>;
  update: (item: Story) => Promise<Story | undefined>;
  delete: (id: number) => Promise<undefined | Error>;
}

export { StoryRepositoryInterface };
