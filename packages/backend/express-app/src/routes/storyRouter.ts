import {
  getStoryListInteractor,
  getStoryByIdInteractor,
  updateStoryInteractor,
  createStoryInteractor,
  deleteStoryInteractor,
} from "@controller/storyInteractor";
import { StoryType, parseStory } from "@libs/types";
import {
  getStoryList,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
} from "@repository/storyRepository";
import { HttpError } from "@utils/Errors";
import { isNumeric } from "@utils/isNumeric";
import { successTrue } from "@utils/outcomeType";
import wrapApi, { wrap } from "@utils/tryCatch";
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
  wrap(async (req, res) => {
    // TODO: description만 들어간 형태. 수정 필요
    const story = req.body;
    const result = await createStoryInteractor(
      { createStory },
      { item: story },
    );

    res.send("ok");
    // res.status(200).json(successTrue(result));
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
    // const temp = { id: parseInt(id, 10), description };
    // const result = await updateStoryInteractor(
    //   { updateStory },
    //   { story: temp },
    // );
    // res.status(200).json(result);
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
