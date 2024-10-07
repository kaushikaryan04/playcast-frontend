import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Video
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          Category
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
