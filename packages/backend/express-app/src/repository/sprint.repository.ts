import { hello } from "@asaxp/types";

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

// const sprintFindAllRepo: Promise<Sprint[]> = () => {};
