import express from "express";

const storyRouter = express.Router();

const getStoryList = async () => {
  const mockStoryList = [
    {
      id: 0,
      type: "epic",
      description: "test",
      content: "",
      point: 2,
      assignee: null,
      parentStory: null,
      childStories: [],
    },
    {
      id: 1,
      type: "epic",
      description: "test",
      content: "",
      point: 2,
      assignee: null,
      parentStory: null,
      childStories: [],
    },
    {
      id: 2,
      type: "epic",
      description: "test",
      content: "",
      point: 2,
      assignee: null,
      parentStory: null,
      childStories: [],
    },
  ];
  return Promise.resolve(mockStoryList);
};

storyRouter.get("/story", async (req, res, next) => {
  try {
    const result = await getStoryList();
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
});

storyRouter.post("/story", async (req, res, next) => {
  try {
    const result = await getStoryList();
    res.status(201).send("ok");
  } catch (e) {
    next(e);
  }
});

export { storyRouter };
