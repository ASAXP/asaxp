"use client";

import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import {
  HomeOutlined,
  AimOutlined,
  UserOutlined,
  BuildOutlined,
  LineChartOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavigation = React.memo(function SideNavigation() {
  const pathname = usePathname();
  const currentPath = {
    "/": "1",
    "/story-list": "2",
    "/user-role-search": "2-1",
    "/iteration-planning": "2-2",
    "/iteration-review": "2-3",
    "/chart": "3",
  };
  return (
    <Sider
      width={250}
      breakpoint="md"
      collapsedWidth={0}
      collapsible
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        height: "100vh",
        zIndex: 500,
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["2"]}
        selectedKeys={[currentPath[pathname as keyof typeof currentPath]]}
        items={[
          {
            key: "1",
            icon: React.createElement(HomeOutlined),
            label: <Link href="/">Project</Link>,
          },
          {
            key: "2",
            icon: React.createElement(AimOutlined),
            label: <Link href="/story-list">Planning Game</Link>,
            children: [
              {
                key: "2-1",
                icon: React.createElement(UserOutlined),
                label: <Link href="/user-role-search">User Role</Link>,
              },
              {
                key: "2-2",
                icon: React.createElement(BuildOutlined),
                label: (
                  <Link href="/iteration-planning">Iteration Planning</Link>
                ),
              },
              {
                key: "2-3",
                icon: React.createElement(BuildOutlined),
                label: <Link href="/iteration-planning">Iteration Kanban</Link>,
              },
              {
                key: "2-3",
                icon: React.createElement(CompassOutlined),
                label: <Link href="/iteration-review">Iteration Review</Link>,
              },
            ],
          },
          {
            key: "3",
            icon: React.createElement(LineChartOutlined),
            label: <Link href="/chart">BurnDown Chart</Link>,
          },
        ]}
      />
    </Sider>
  );
});

export { SideNavigation };
