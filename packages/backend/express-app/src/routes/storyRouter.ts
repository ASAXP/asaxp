import { storyInteractor } from "@controller/storyInteractor";
import { storyRepository } from "@repository/inMemory/storyRepository";
import express from "express";

const storyRouter = express.Router();

storyRouter.get("/story", async (req, res, next) => {
  try {
    const result = await storyInteractor.getStoryList(storyRepository.getList);
    console.log(result);
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

export { storyRouter };
