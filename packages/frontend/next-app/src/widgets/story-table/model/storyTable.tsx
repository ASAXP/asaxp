import { Button, TableColumnsType } from "antd";

export interface StoryTable {
  key: React.Key;
  type: "story" | "epic" | "spike";
  description: string;
  storyPoint: number;
}

export const storyColumns: TableColumnsType<StoryTable> = [
  {
    title: "type",
    dataIndex: "type",
  },
  {
    title: "description",
    dataIndex: "description",
  },
  {
    title: "storyPoint",
    dataIndex: "storyPoint",
  },
];

export const storyRowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: StoryTable[]) => {
    console.log(selectedRowKeys, selectedRows);
  },
};
