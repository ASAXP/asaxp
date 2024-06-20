import db from "@database/database";
import { Story } from "@domain/story/entities/story";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import * as StoryRepositoryInterface from "@repository/storyRepository.interface";

const getStoryList: StoryRepositoryInterface.GetStoryListType = async () => {
  const queryText = "select * from stories limit 10";
  const [rows] = await db.query<RowDataPacket[]>(queryText);
  return rows as Story[];
};

const getStoryById: StoryRepositoryInterface.GetStoryByIdType = async (
  id: number,
) => {
  const queryText = "select * from stories where id = ?";
  const [rows] = await db.query<RowDataPacket[]>(queryText, [id]);
  return rows[0] as Story;
};

const createStory: StoryRepositoryInterface.CreateStoryType = async (
  item: Omit<Story, "id">,
) => {
  const queryText = "insert into stories (description) values (?)";
  const { description } = item;

  const [rows] = await db.query<ResultSetHeader>(queryText, [description]);
  return rows.insertId;
};

const updateStory: StoryRepositoryInterface.UpdateStoryType = async (
  item: Story,
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
