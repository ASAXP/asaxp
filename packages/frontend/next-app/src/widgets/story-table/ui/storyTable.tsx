"use client";

import React from "react";
import { Button, Flex, Table } from "antd";
import { type IStory, storyRowSelection } from "../model/storyTableModel";
import StoryFormDrawer from "@widgets/story-submit-drawer/ui/storyFormDrawer";
import useStoryFormDrawer from "@widgets/story-submit-drawer/model/useDrawer";

interface DataSample extends IStory {
  key: React.Key;
}

export default function StoryTable() {
  // const [selectedRows, setSelectedRows] = React.useState<IStory[]>();
  const { storyDefaultData, showDrawer, showModifyDrawer, closeDrawer } =
    useStoryFormDrawer();

  const data: DataSample[] = [
    {
      key: "1",
      storyId: "1",
      type: "story",
      description: "testDescription",
      storyPoint: 12,
    },
    {
      key: "2",
      storyId: "1",
      type: "spike",
      description: "testDescription2",
      storyPoint: 10,
    },
  ];

  return (
    <>
      <Flex style={{ justifyContent: "end" }}>
        <Button type="primary" style={{ marginBlockEnd: 20 }}>
          반복주기 작성
        </Button>
      </Flex>
      <Table rowSelection={storyRowSelection} dataSource={data}>
        <Table.Column title="type" dataIndex="type" />
        <Table.Column title="description" dataIndex="description" />
        <Table.Column title="storyPoint" dataIndex="storyPoint" />
        <Table.Column
          title="modifyStory"
          render={(value) => {
            return (
              <Button
                onClick={() => {
                  showModifyDrawer(value);
                }}
              >
                modifyStory
              </Button>
            );
          }}
        />
      </Table>
      <StoryFormDrawer
        open={storyDefaultData.open ?? false}
        type={storyDefaultData.type ?? "story"}
        description={storyDefaultData.description ?? ""}
        storyPoint={storyDefaultData.storyPoint ?? 0}
        showCreateDrawer={showDrawer}
        closeDrawer={closeDrawer}
      />
    </>
  );
}
