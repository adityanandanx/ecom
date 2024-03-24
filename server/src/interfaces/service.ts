export interface IService<T> {
  create: (item: Omit<T, "id">) => Promise<T>;
  getAll: () => Promise<T[]>;
  getById: (id: number) => Promise<T | null>;
  delete: (id: number) => Promise<T>;
  update: (id: number, item: T | Omit<T, "id">) => Promise<T>;
}
