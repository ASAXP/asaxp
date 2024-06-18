interface StoryRepositoryInterface<T> {
  getList: () => Promise<T[]>;
  getById: (id: number) => Promise<T | undefined>;
  create: (item: Omit<T, "id">) => Promise<T | string>;
  update: (item: T) => Promise<T | undefined>;
  delete: (id: number) => Promise<undefined | Error>;
}

export { StoryRepositoryInterface };
