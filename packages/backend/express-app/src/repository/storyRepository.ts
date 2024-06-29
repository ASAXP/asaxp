import db from "@database/database";
import { StoryDAOType, StoryType } from "@libs/types";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import * as StoryRepositoryInterface from "@repository/storyRepository.interface";
import { queryTextBuilder } from "@utils/queryTextBuilder";

const getStoryList: StoryRepositoryInterface.GetStoryListType = async () => {
  const queryText = "select * from stories limit 10";
  const [rows] = await db.query<RowDataPacket[]>(queryText);
  return rows as StoryType[];
};

const getStoryById: StoryRepositoryInterface.GetStoryByIdType = async (
  id: number,
) => {
  const queryText = "select * from stories where id = ?";
  const [rows] = await db.query<RowDataPacket[]>(queryText, [id]);
  return rows[0] as StoryType;
};

const createStory: StoryRepositoryInterface.CreateStoryType = async (
  item: Omit<StoryDAOType, "id">,
) => {
  const { fields, values, questionMarkString } = queryTextBuilder(item);
  const queryText = `insert into stories (${fields}) values (${questionMarkString})`;
  const [rows] = await db.query<ResultSetHeader>(queryText, [...values]);
  return rows.insertId;
};

const updateStory: StoryRepositoryInterface.UpdateStoryType = async (
  item: StoryType,
) => {
  const queryText = "update stories SET description = ? WHERE id = ?";
  const { id, description } = item;
  const [rows] = await db.query<ResultSetHeader>(queryText, [description, id]);
  return rows.affectedRows;
};

const deleteStory: StoryRepositoryInterface.DeleteStoryType = async (
  id: number,
) => {
  const queryText = "delete from stories where id = ?";
  const [result] = await db.query<ResultSetHeader>(queryText, [id]);
  return result.affectedRows;
};

export { createStory, updateStory, deleteStory, getStoryList, getStoryById };
