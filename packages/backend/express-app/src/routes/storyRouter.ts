import { storyController } from "@controller/storyInteractor";
import { Story } from "@domain/story/entities/story";
import {
  getStoryList,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
} from "@repository/storyRepository";
import { HttpError } from "@utils/Errors";
import { isNumeric } from "@utils/isNumeric";
import { parseStory } from "@libs/types";
import wrapApi from "@utils/tryCatch";
import express from "express";

const storyRouter = express.Router();

storyRouter.get(
  "/story",
  wrapApi(async (req, res) => {
    const result = await storyController.getStoryList({
      getList: getStoryList,
    });
    res.status(200).json(result);
  }),
);

storyRouter.get(
  "/story/:id",
  wrapApi(async (req, res) => {
    const { id } = req.params;
    if (!isNumeric(id)) throw new HttpError(400, "Invalid Parameter");
    const result = await storyController.getStoryById(
      { getById: getStoryById },
      { id: parseInt(id) },
    );
    res.status(200).json(result);
  }),
);

storyRouter.post(
  "/story",
  wrapApi(async (req, res) => {
    const { story } = req.body;
    const { id, ...parsedStory } = parseStory(story);
    const result = await storyController.create(
      { createStory },
      { story: parsedStory as Omit<Story, "id"> },
    );
    res.status(200).json(result);
  }),
);

storyRouter.put(
  "/story",
  wrapApi(async (req, res) => {
    const { story } = req.body;
    const result = await storyController.update({ updateStory }, { story });
    res.status(200).json(result);
  }),
);

storyRouter.delete(
  "story/:id",
  wrapApi(async (req, res) => {
    const { id } = req.params;
    if (!isNumeric(id)) throw new HttpError(400, "Invalid Parameter");
    const result = await storyController.delete(
      { deleteStory },
      { id: parseInt(id) },
    );
    res.status(200).json(result);
  }),
);

export { storyRouter };