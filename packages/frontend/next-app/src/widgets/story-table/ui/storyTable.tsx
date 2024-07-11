"use client";

import React from "react";
import { Table, TableColumnsType } from "antd";
import {
  type StoryTable,
  storyColumns,
  storyRowSelection,
} from "../model/storyTable";

function StoryTable() {
  const [selectedRows, setSelectedRows] = React.useState<StoryTable[]>();
  const data: StoryTable[] = [
    {
      key: "1",
      type: "story",
      description: "testDescription",
      storyPoint: 12,
    },
    {
      key: "2",
      type: "spike",
      description: "testDescription2",
      storyPoint: 10,
    },
  ];
  return (
    <Table
      rowSelection={storyRowSelection}
      dataSource={data}
      columns={storyColumns}
    />
  );
}

export { StoryTable };
