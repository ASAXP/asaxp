import {
  getStoryListInteractor,
  getStoryByIdInteractor,
  updateStoryInteractor,
  createStoryInteractor,
  deleteStoryInteractor,
} from "@controller/storyInteractor";
import { Story } from "@libs/types";
import {
  getStoryList,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
} from "@repository/storyRepository";
import { HttpError } from "@utils/Errors";
import { isNumeric } from "@utils/isNumeric";
import wrapApi from "@utils/tryCatch";
import express from "express";

const storyRouter = express.Router();

storyRouter.get(
  "/story",
  wrapApi(async (req, res) => {
    const result = await getStoryListInteractor({
      getStoryList,
    });
    res.status(200).json(result);
  }),
);

storyRouter.get(
  "/story/:id",
  wrapApi(async (req, res) => {
    const { id } = req.params;
    if (!isNumeric(id)) throw new HttpError(400, "Invalid Parameter");
    const result = await getStoryByIdInteractor(
      { getById: getStoryById },
      { id: parseInt(id) },
    );
    res.status(200).json(result);
  }),
);

storyRouter.post(
  "/story",
  wrapApi(async (req, res) => {
    // TODO: description만 들어간 형태. 수정 필요
    const story = req.body;
    const result = await createStoryInteractor(
      { createStory },
      { item: story as Omit<Story, "id"> },
    );
    res.status(200).json(result);
  }),
);

storyRouter.put(
  "/story/:id",
  wrapApi(async (req, res) => {
    // TODO : 예외처리, 파라미터 요 수정
    // const id = parseInt(req.params.id, 10);
    const { id } = req.params;
    if (!id || !isNumeric(id)) {
      return res.status(400).send("invalid id value");
    }
    const { description } = req.body;
    const temp = { id: parseInt(id, 10), description };
    const result = await updateStoryInteractor(
      { updateStory },
      { story: temp as Story },
    );
    res.status(200).json(result);
  }),
);

storyRouter.delete(
  "/story/:id",
  wrapApi(async (req, res) => {
    const { id } = req.params;
    if (!isNumeric(id)) throw new HttpError(400, "Invalid Parameter");
    const result = await deleteStoryInteractor(
      { deleteStory },
      { id: parseInt(id) },
    );
    res.status(200).json(result);
  }),
);

export { storyRouter };
