import React from "react";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { StoryTable } from "@/widgets/story-table/ui";

export default function page() {
  return (
    <Content style={{ padding: "24px" }}>
      <Title>스토리</Title>
      <StoryTable />
    </Content>
  );
}
