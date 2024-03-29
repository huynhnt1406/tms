import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  PieChartFilled,
  VideoCameraFilled,
  UserOutlined,
  NotificationOutlined,
  ProfileFilled,
  PhoneFilled,
  DropboxOutlined,
  BarChartOutlined,
  ApiOutlined,
  SettingFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined,
  BellOutlined,
} from "@ant-design/icons";
import {
  ImageOrder,
  TitleOrder,
  HeaderStyle,
  ContentStyle,
  ToggleStyle,
  MenuStyle,
  HeaderRight,
  BrandStyle,
} from "../styles/OrderDetail";
import { Badge } from "antd";
import CampaignConfig from "../views/CampaignConfig";
import CampaignManagement from "../views/CampaignManagement";
import OrderList from "../views/OrderList";
import OrderProcessing from "../views/OrderProcessing";
const { Sider } = Layout;
function OrderDetail() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Layout>
        <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
          <BrandStyle theme="light" mode="inline">
            <Menu.Item
              icon={
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/asset/img/homeimg.png"}
                  style={ImageOrder}
                />
              }
            >
              <span style={TitleOrder}>CRM System</span>
            </Menu.Item>
          </BrandStyle>
          <MenuStyle theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<PieChartFilled style={{ color: " #78909C" }} />}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraFilled style={{ color: " #78909C" }} />}
            >
              Monitor
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UserOutlined style={{ color: " #78909C" }} />}
            >
              Customers
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<NotificationOutlined style={{ color: " #78909C" }} />}
            >
              <Link to="/campaign-manager">Campaigns</Link>
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<ProfileFilled style={{ color: " #78909C" }} />}
            >
              <Link to="/">Orders</Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<PhoneFilled style={{ color: " #78909C" }} />}
            >
              Callback
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<DropboxOutlined style={{ color: " #78909C" }} />}
            >
              Products
            </Menu.Item>
            <Menu.Item
              key="8"
              icon={<BarChartOutlined style={{ color: " #78909C" }} />}
            >
              Reports
            </Menu.Item>
            <Menu.Item
              key="9"
              icon={<ApiOutlined style={{ color: " #78909C" }} />}
            >
              System Configuration
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={<SettingFilled style={{ color: " #78909C" }} />}
            >
              Settings
            </Menu.Item>
          </MenuStyle>
        </Sider>
        <Layout className="site-layout">
          <HeaderStyle>
            <ToggleStyle onClick={toggle}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </ToggleStyle>
            <HeaderRight>
              <Badge count={100} style={{ fontSize: "8px" }}>
                <MailOutlined style={{ fontSize: "24px", color: " #78909C" }} />
              </Badge>
              <Badge count={100} style={{ fontSize: "8px" }}>
                <BellOutlined
                  style={{
                    fontSize: "24px",
                    marginLeft: "33px",
                    color: " #78909C",
                  }}
                />
              </Badge>
              <Avatar
                size={40}
                style={{ marginLeft: "33px" }}
                src={process.env.PUBLIC_URL + "/asset/img/avatar1.jpg"}
              />
            </HeaderRight>
          </HeaderStyle>
          <ContentStyle>
            <Switch>
              <Route path="/campaign-manager/campaign-config">
                <CampaignConfig />
              </Route>
              <Route path="/campaign-manager">
                <CampaignManagement />
              </Route>
              <Route exact path="/">
                <OrderList />
              </Route>
              <Route path="/orderlist/orderprocessing">
                <OrderProcessing />
              </Route>
            </Switch>
          </ContentStyle>
        </Layout>
      </Layout>
    </Router>
  );
}

export default OrderDetail;
