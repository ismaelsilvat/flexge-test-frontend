import React from "react";
import {
  ClockCircleOutlined,
  ProfileOutlined,
  UserOutlined,
  BoxPlotOutlined,
  UnorderedListOutlined,
  FolderOpenOutlined,
  TrophyOutlined,
  FolderViewOutlined,
  BugOutlined,
  MoneyCollectOutlined,
  MessageOutlined,
  AccountBookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useUserContext } from "../context/User";

const { Header } = Layout;

export const HeaderC: React.FC = () => {
  const { logout } = useUserContext();

  const items: MenuProps["items"] = [
    {
      label: <a href="/">Dashboard</a>,
      key: "Dashboard",
      icon: <ClockCircleOutlined />,
    },
    {
      label: <a href="/">Profile</a>,
      key: "Profile",
      icon: <ProfileOutlined />,
    },
    {
      label: <a href="/">Admin</a>,
      key: "Admin",
      icon: <UserOutlined />,
    },
    {
      label: <a href="/">Basic Register</a>,
      key: "Register",
      icon: <BoxPlotOutlined />,
    },
    {
      label: <a href="/">Content</a>,
      key: "Content",
      icon: <UnorderedListOutlined />,
    },
    {
      label: <a href="/">Academic</a>,
      key: "Academic",
      icon: <FolderOpenOutlined />,
    },
    {
      label: <a href="/">Ranking</a>,
      key: "Ranking",
      icon: <TrophyOutlined />,
    },
    {
      label: <a href="/">Reports</a>,
      key: "Reports",
      icon: <FolderViewOutlined />,
    },
    {
      label: <a href="/">Config</a>,
      key: "Config",
      icon: <BugOutlined />,
    },
    {
      label: <a href="/">Payments</a>,
      key: "Payments",
      icon: <MoneyCollectOutlined />,
    },
    {
      label: <a href="/">Messages</a>,
      key: "Messages",
      icon: <MessageOutlined />,
    },
    {
      label: <a href="/">KPIs</a>,
      key: "KPIs",
      icon: <AccountBookOutlined />,
    },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
      />
      <Button
        icon={<LogoutOutlined />}
        style={{
          position: "absolute",
          top: "25%",
          left: "85%",
          transform: "rotate(270deg)",
        }}
        onClick={logout}
      />
    </Header>
  );
};
