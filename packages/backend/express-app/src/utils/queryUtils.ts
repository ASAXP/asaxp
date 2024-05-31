import db from "@database/database";
import type { ResultSetHeader } from "mysql2";
import { z } from "zod";

export type RepoSchemaType<T> = z.ZodType<T>;

async function SelectQuery<T>(
  queryString: string,
  invariantChecker: RepoSchemaType<T>,
): Promise<Partial<T>> {
  const [queryResult] = await db.execute(queryString);
  const result = invariantChecker.parse(queryResult as unknown);
  return result;
}

async function ModifyQuery(queryString: string): Promise<ResultSetHeader> {
  const [queryResult] = await db.execute(queryString);
  return queryResult as ResultSetHeader;
}

export { SelectQuery, ModifyQuery };
