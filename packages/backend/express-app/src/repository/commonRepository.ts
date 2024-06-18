export type Repository<T> = {
  getList: () => Promise<T[]>;
  getById: (id: string) => Promise<T | undefined>;
  create: (item: Omit<T, "id">) => Promise<T | string>;
  update: (item: T) => Promise<T>;
  upsert: (item: T) => Promise<T>;
  delete: (id: string) => Promise<undefined | Error>;
};
