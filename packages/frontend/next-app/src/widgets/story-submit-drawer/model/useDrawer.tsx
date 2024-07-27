"use client";

import { IStory } from "@widgets/story-table/model/storyTableModel";
import React from "react";

export interface StoryFormProps extends IStory {
  open: boolean;
}

export default function useStoryFormDrawer() {
  const [storyDefaultData, setStoryDefaultData] =
    React.useState<StoryFormProps>({
      open: false,
      storyId: "",
      type: "story",
      description: "",
      storyPoint: 0,
    });
  const showDrawer = () => {
    setStoryDefaultData({
      open: true,
      storyId: "",
      type: "story",
      description: "",
      storyPoint: 0,
    });
  };
  const showModifyDrawer = (values: StoryFormProps) => {
    setStoryDefaultData({
      open: true,
      storyId: values.storyId,
      type: values.type,
      description: values.description,
      storyPoint: values.storyPoint,
    });
  };
  const closeDrawer = () => {
    setStoryDefaultData({
      open: false,
      storyId: "",
      type: "story",
      description: "",
      storyPoint: 0,
    });
  };
  return {
    storyDefaultData,
    showDrawer,
    showModifyDrawer,
    closeDrawer,
  };
}
