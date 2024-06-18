import { storyInteractor } from "@controller/storyInteractor";
import { Story } from "@domain/story/entities/story";
import { storyRepository } from "@repository/inMemory/storyRepository";
import express from "express";

const storyRouter = express.Router();

storyRouter.get("/story", async (req, res, next) => {
  try {
    const result = await storyInteractor.getStoryList({
      getList: storyRepository.getList,
    });
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

storyRouter.get("/story/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await storyInteractor.getStoryById(
      { getById: storyRepository.getById },
      { id: parseInt(id) },
    );
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

storyRouter.post("/story", async (req, res, next) => {
  try {
    const { story } = req.body;
    const result = await storyInteractor.create(
      { createStory: storyRepository.create },
      { story: story as Omit<Story, "id"> },
    );
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

storyRouter.put("/story", async (req, res, next) => {
  try {
    const { story } = req.body;
    const result = await storyInteractor.update(
      { updateStory: storyRepository.update },
      { story },
    );
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

storyRouter.delete("story/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await storyInteractor.delete(
      { deleteStory: storyRepository.delete },
      { id: parseInt(id) },
    );
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

export { storyRouter };
