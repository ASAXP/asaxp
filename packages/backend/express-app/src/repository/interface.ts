export interface Repository<T> {
  getList: () => Promise<T[]>;
  getById: (id: string) => Promise<T | undefined>;
  create: (item: Omit<T, "id">) => Promise<T>;
  update: (item: T) => Promise<T | undefined>;
  upsert: (item: T) => Promise<T>;
  delete: (id: string) => Promise<undefined | Error>;
}
