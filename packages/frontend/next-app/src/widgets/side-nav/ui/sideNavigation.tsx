import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import {
  AimOutlined,
  UserOutlined,
  BuildOutlined,
  LineChartOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function SideNavigation() {
  return (
    <Sider breakpoint="lg" collapsedWidth={0} collapsible>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: React.createElement(AimOutlined),
            label: <Link href="/story-list">Planning Game</Link>,
            children: [
              {
                key: "1-1",
                icon: React.createElement(UserOutlined),
                label: (
                  <Link href="/user-role-search">User Role Searching</Link>
                ),
              },
              {
                key: "1-2",
                icon: React.createElement(BuildOutlined),
                label: (
                  <Link href="/iteration-planning">Iteration Planning</Link>
                ),
              },
              {
                key: "1-3",
                icon: React.createElement(CompassOutlined),
                label: <Link href="/iteration-review">Iteration Review</Link>,
              },
            ],
          },
          {
            key: "2",
            icon: React.createElement(LineChartOutlined),
            label: <Link href="/chart">BurnDown Chart</Link>,
          },
        ]}
      />
    </Sider>
  );
}

export { SideNavigation };
