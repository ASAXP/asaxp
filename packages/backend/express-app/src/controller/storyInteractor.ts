import {
  GetStoryListType,
  GetStoryByIdType,
  UpdateStoryType,
  CreateStoryType,
  DeleteStoryType,
} from "@repository/storyRepository.interface";
import { StoryDAOType, StoryType } from "@libs/types";

const getStoryListInteractor = async ({
  getStoryList,
}: {
  getStoryList: GetStoryListType;
}) => {
  const result = await getStoryList();
  return result;
};

const getStoryByIdInteractor = async (
  {
    getById,
  }: {
    getById: GetStoryByIdType;
  },
  { id }: { id: number },
) => {
  const result = await getById(id);
  return result;
};

const createStoryInteractor = async (
  { createStory }: { createStory: CreateStoryType },
  { item }: { item: Omit<StoryDAOType, "id"> },
) => {
  const result = await createStory(item);
  return result;
};

const updateStoryInteractor = async (
  { updateStory }: { updateStory: UpdateStoryType },
  { story }: { story: StoryType },
) => {
  const result = await updateStory(story);
  return result;
};

const deleteStoryInteractor = async (
  { deleteStory }: { deleteStory: DeleteStoryType },
  { id }: { id: number },
) => {
  const result = await deleteStory(id);
  return result;
};

export {
  getStoryListInteractor,
  getStoryByIdInteractor,
  deleteStoryInteractor,
  updateStoryInteractor,
  createStoryInteractor,
};
