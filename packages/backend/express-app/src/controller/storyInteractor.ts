import {
  GetStoryListType,
  GetStoryByIdType,
  UpdateStoryType,
  CreateStoryType,
  DeleteStoryType,
} from "@repository/storyRepository.interface";
import { Story } from "@domain/story/entities/story";

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
  { item }: { item: Omit<Story, "id"> },
) => {
  const result = await createStory(item);
  return result;
};

const updateStoryInteractor = async (
  { updateStory }: { updateStory: UpdateStoryType },
  { story }: { story: Story },
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
