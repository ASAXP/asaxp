import React from "react";
import { ZodIssue, z } from "zod";

const useZodResolver = <T extends z.ZodType>(schema: T) => {
  return React.useCallback(
    (values: unknown) => {
      const { success, data, error } = schema.safeParse(values);
      if (error) {
        const test = error.errors;
      }
      return success
        ? { values: data as T, errors: {} }
        : {
            values: {},
            errors: error.flatten((issue: ZodIssue) => ({
              code: issue.code,
              message: issue.message,
            })),
          };
    },
    [schema],
  );
};

export { useZodResolver };
