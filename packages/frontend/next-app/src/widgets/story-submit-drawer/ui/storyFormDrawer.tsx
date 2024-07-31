"use client";

import React from "react";
import { StoryTableInterface } from "@widgets/story-table/model";
import { Button, Drawer, Form, Input, Select, Flex } from "antd";
import { StoryFormProps } from "../model/useDrawer";
import { useForm } from "antd/es/form/Form";

export interface StoryFormDrawerProps extends Partial<StoryFormProps> {
  showCreateDrawer: () => void;
  closeDrawer: () => void;
}

export default function StoryFormDrawer({
  open,
  type,
  description,
  storyPoint,
  showCreateDrawer,
  closeDrawer,
}: StoryFormDrawerProps) {
  const [form] = useForm();
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          showCreateDrawer();
        }}
      >
        new Story
      </Button>
      <Drawer
        title="StoryCreate"
        onClose={closeDrawer}
        open={open}
        destroyOnClose
        autoFocus
        placement="bottom"
      >
        <Form
          name="story-form"
          onFinish={(values) => console.log("finished", values)}
          layout="horizontal"
          initialValues={{ type, description, storyPoint }}
          labelCol={{ span: 4 }}
        >
          <Form.Item<StoryTableInterface>
            name="type"
            label="type"
            rules={[{ required: true }]}
          >
            <Select options={[{ value: "story", label: "story" }]} />
          </Form.Item>
          <Form.Item<StoryTableInterface>
            name="description"
            label="description"
            rules={[{ required: true, message: "스토리 내용을 입력해주세요" }]}
          >
            <Input placeholder="<사용자 역할>은 <>를 위해 <>기능이 필요합니다" />
          </Form.Item>
          <Form.Item<StoryTableInterface> name="storyPoint" label="storyPoint">
            <Input type="number" placeholder="숫자 값을 입력해주세요" />
          </Form.Item>
          <Flex justify="end" gap="small">
            <Button type="default" onClick={closeDrawer} htmlType="button">
              Cancel
            </Button>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Drawer>
    </>
  );
}
