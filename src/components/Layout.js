import React from "react";
import { Layout, Menu, Icon } from "antd";

import Search from "../Search/Container";

const Main = ({ children }) => {
const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout>
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Latest Search</span>
          </Menu.Item>
        </Menu>
      </Sider> */}
      <Layout>
        <Header style={{ background: "#fff", textAlign: 'center' }}>Spotify search app</Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Created by Guillermo Eyherabide
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
