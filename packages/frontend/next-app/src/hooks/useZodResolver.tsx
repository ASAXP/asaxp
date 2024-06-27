import React from "react";
import { z } from "zod";

const useZodResolver = (schema: z.ZodSchema<unknown>) => {
  return React.useCallback(
    (args: unknown) => {
      const { success, data, error } = schema.safeParse(args);
      return success ? data : error;
    },
    [schema],
  );
};

export { useZodResolver };
