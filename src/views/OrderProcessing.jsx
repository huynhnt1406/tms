import React from "react";
import { Breadcrumb } from "antd";
import { Wrapper, OrderRight } from "../styles/OrderList";
import {
  OrderLeft,
  ButtonSave,
  HeaderProcessing,
  Trash,
  Uncalled,
  Approved,
  Rejected,
  ButtonAct,
  TitleProcess,
  BodyProcessing,
  BodyLeft,
  BodyRight,
  TableHeader,
  TitleTable,
  AddProduct,
  TableFooter,
  ButtonStyle,
  TabsStyle,
  TabPaneStyle,
  InputStyle
} from "../styles/OrderProcessing";
import { ProductInfo, TableProduct } from "../styles/Contact";
import { Table, Cascader,Tabs } from "antd";
import {
  EllipsisOutlined,
  CheckOutlined,
  DeleteOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import Tags from "../components/Tags";
import {Link} from 'react-router-dom'
function OrderProcessing() {
  const columns = [
    {
      key: "product",
      title: "PRODUCT NAME",
      dataIndex: "productname",
      render: (productname) => (
        <span style={{ color: "#367BF5" }}>{productname}</span>
      ),
    },
    {
      key: "stock",
      title: "STOCK",
      dataIndex: "stock",
    },
    {
      key: "price",
      title: "PRICE",
      dataIndex: "price",
      render: (price) => <span>{price}đ</span>,
    },
    {
      key: "qty",
      title: (
        <span>
          QTY
          <img alt="" src={process.env.PUBLIC_URL + '/asset/img/alert.jpg'} />
        </span>
      ),
      dataIndex: "qty",
    },
    {
      key: "total",
      title: "TOTAL",
      dataIndex: "total",
      render: (total) => <span>{total}đ</span>,
    },
    {
      key: "",
      title: null,
      dataIndex: "elipsed",
      render: (elipsed) => (
        <span>
          <EllipsisOutlined style={{ color: "#78909C", fontSize: "25px" }} />
        </span>
      ),
    },
  ];
  const data = [];
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <Wrapper>
      <HeaderProcessing>
        <OrderLeft>
          <TitleProcess>Order Processing</TitleProcess>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/">Orders List</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Orders Processing</Breadcrumb.Item>
          </Breadcrumb>
        </OrderLeft>
        <OrderRight>
          <Approved>Approved</Approved>
          <Uncalled>Uncalled</Uncalled>
          <Rejected>Rejected</Rejected>
          <Trash>Trash</Trash>
          <ButtonSave>Callback</ButtonSave>
          <ButtonAct>Save</ButtonAct>
        </OrderRight>
      </HeaderProcessing>
      <BodyProcessing>
        <BodyLeft style={{ backgroundColor: "#F7F9FA", padding: "5px" }}>
          <Tags />
        </BodyLeft>
        <BodyRight>
          <TableProduct>
            <TableHeader>
              <TitleTable>Products</TitleTable>
              <AddProduct>+ Add Product</AddProduct>
            </TableHeader>
            <Table
              columns={columns}
              dataSource={data}
              size="small"
              pagination={false}
            />
            <TableFooter>
              <Cascader
                placeholder="Select product"
              />
              <Cascader
                placeholder="Select stock"
              />
              <Cascader
                placeholder="Price"
              />
              <InputStyle
                placeholder="Quantity"
              />
              <span
                style={{ width: "70px", height: "32px", textAlign: "center" }}
              >
                Ođ
              </span>
              <ButtonStyle
                icon={<CheckOutlined style={{ color: "#4CAF50" }} />}
              />
              <ButtonStyle
                icon={<DeleteOutlined style={{ color: "#F7685B" }} />}
                style={{ border: "1px solid #F7685B", borderRadius: "4px" }}
              />
            </TableFooter>
          </TableProduct>
          <ProductInfo>
            <TabsStyle
              defaultActiveKey="1"
              onChange={callback}
            >
              <TabPaneStyle
                tab="Product description"
                key="1"
              >
                <FrownOutlined />
                No data found in the server
              </TabPaneStyle>
              <TabPane tab="Agent Script" key="2"></TabPane>
            </TabsStyle>
          </ProductInfo>
        </BodyRight>
      </BodyProcessing>
    </Wrapper>
  );
}

export default OrderProcessing;
