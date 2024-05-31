import db from "@database/database";
import { Sprint } from "@domain/sprint/entities/sprint";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

const SQL_SELECT = `
  SELECT 
  id,
  name,
  description,
  cycle,
  begin_date,
  end_date,
  updated_at,
  created_at
  FROM
  sprints
`;

const sprintFindAllRepo = async () => {
  const queryText = SQL_SELECT + " limit 10";
  // const [result] = await db.query(queryText);
  // return result as Sprint;
};

const sprintFindById = async (id: bigint) => {
  const queryText = SQL_SELECT + " WHERE id = ?";
  const [results, fields] = await db.query(queryText, [id]);
  return results[0];
};
