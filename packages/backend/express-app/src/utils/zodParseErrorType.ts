import { ZodError } from "zod";

export type ZodSafeParseType<T> =
  | { success: true; data: T }
  | { success: false; error: ZodError };
