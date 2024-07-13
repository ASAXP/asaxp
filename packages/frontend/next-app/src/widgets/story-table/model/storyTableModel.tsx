import useStoryFormDrawer from "@widgets/story-submit-drawer/model/useDrawer";
import { Button, TableColumnsType } from "antd";

export interface IStory {
  storyId: string;
  type: "story" | "epic" | "spike";
  description: string;
  storyPoint: number;
}

export const storyRowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: IStory[]) => {
    console.log(selectedRowKeys, selectedRows);
  },
};
