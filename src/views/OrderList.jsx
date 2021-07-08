import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import {
  OrderTitle,
  Wrapper,
  Header,
  OrderRight,
  Button,
  InputStyle,
} from "../styles/OrderList";
import { Table, Tag } from "antd";
import { InfoCircleOutlined, EllipsisOutlined } from "@ant-design/icons";
import { TableFont, ElementTable } from "../styles/CampaignElementStyle/Fonts";
import {Link} from 'react-router-dom'
const data = [];
function OrderList() {
  const sorterItem = (a, b) => a.dataIndex - b.dataIndex;
  const [selectedRowKeys] = useState([]);
  const columns = [
    {
      key: "LEADID",
      title: <TableFont>LEAD ID</TableFont>,
      dataIndex: "LEADID",
      sorter: sorterItem,
      render: (LEADID) => <ElementTable><Link to="/orderlist/orderprocessing">{LEADID}</Link></ElementTable>,
    },
    {
      key: "name",
      title: <TableFont>CUSTOMER NAME</TableFont>,
      dataIndex: "name",
      sorter: sorterItem,
      render: (name) => <ElementTable>{name}</ElementTable>,
    },
    {
      key: "productname",
      title: <TableFont>PRODUCT NAME</TableFont>,
      dataIndex: "productname",
      sorter: sorterItem,
      render: (productname) => <ElementTable>{productname}</ElementTable>,
    },
    {
      key: "status",
      title: <TableFont>STATUS</TableFont>,
      dataIndex: "status",
      sorter: sorterItem,
      render: (status) => {
        let color = "";
        switch (status) {
          case "New":
            color = "gold";
            break;
          case "Rejected":
            color = "red";
            break;
          case "Approved":
            color = "green";
            break;
          case "Trash":
            color = "";
            break;
          case "Callback":
            color = "greekblue";
            break;
          case "Uncalled":
            color = "purple";
            break;
          default:
            break;
        }
        return (
          <Tag key={status} color={color} style={{ borderRadius: "10px" }}>
            {status === "Callback" || status === "Rejected" ? (
              <div>
                {status} <InfoCircleOutlined />{" "}
              </div>
            ) : (
              status
            )}
          </Tag>
        );
      },
    },
    {
      key: "codfee",
      title: <TableFont>COD FEE</TableFont>,
      dataIndex: "codfee",
      sorter: sorterItem,
      render: (codfee) => <ElementTable>{codfee}đ</ElementTable>,
    },
    {
      key: "address",
      title: <TableFont>ADDRESS</TableFont>,
      dataIndex: "address",
      sorter: sorterItem,
      render: (address) => <ElementTable>{address}</ElementTable>,
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

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <Wrapper>
      <Header>
        <OrderTitle>Order List</OrderTitle>
        <OrderRight>
          <InputStyle
            placeholder="Search for anything"
            prefix={<SearchOutlined />}
          />
          <Button>Export CSV</Button>
        </OrderRight>
      </Header>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        size="small"
      />
    </Wrapper>
  );
}

export default OrderList;
