import React,{useState} from 'react'
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import {OrderTitle, Wrapper, Header, OrderRight,inputStyle, Button} from '../styles/OrderList'
import {Table,Tag} from 'antd'
import {InfoCircleOutlined, EllipsisOutlined} from '@ant-design/icons'
function OrderList() {
    const [selectedRowKeys] = useState([])
    const data = [];

    const columns = [
        {
        key:'LEADID',
        title: 'LEAD ID',
        dataIndex: 'LEADID',
        sorter: (a, b) => a.age - b.age,
        },
        {
        key:'name',
        title: 'CUSTOMER NAME',
        dataIndex: 'name',
        sorter: (a, b) => a.name - b.name,
        },
        {
        key:'productname',
        title: 'PRODUCT NAME',
        dataIndex: 'productname',
        sorter: (a, b) => a.productname - b.productname,
        },
        {
            key:'statuses',
            title: 'STATUS',
            dataIndex: 'statuses',
            sorter: (a, b) => a.age - b.age,
            render:statuses => (
                <span>
                {
                    statuses.map(status => {
                        let color = '';
                        if(status === 'New'){
                            color = "gold"
                        }
                        if(status === 'Rejected'){
                            color = "red"
                        }
                        if(status === 'Approved'){
                            color = "green"
                        }
                        if(status === 'Trash'){
                            color = ""
                        }
                        if(status === 'Callback'){
                            color = "geekblue"
                        }
                        if(status === 'Uncalled'){
                            color = "purple"
                        }
                        return(
                            <Tag key={status} color={color} style={{borderRadius:'10px'}}>
                                 {status === "Callback" || status === "Rejected" ? <div>{status} <InfoCircleOutlined/> </div> : status}
                            </Tag>
                        )
                    })
                }
                </span>
            )
        },
        {
            key:'codfee',
            title: 'COD FEE',
            dataIndex: 'codfee',
            sorter: (a, b) => a.codfee - b.codfee,
            render: codfee => <span>{codfee}đ</span>,
        },
        {
            key:'address',
            title: 'ADDRESS',
            dataIndex: 'address',
            sorter: (a, b) => a.address - b.address,
        },
        {
            key:'',
            title:null,
            dataIndex: 'elipsed',
            render: elipsed => <span><EllipsisOutlined style={{color:'#78909C', fontSize:'25px'}} /></span>
        },
    ];

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
                        <Input  placeholder="Search for anything" prefix={<SearchOutlined />} style={inputStyle} />
                        <Button>Export CSV</Button>
                    </OrderRight>
                </Header>
                <Table  rowSelection={rowSelection} columns={columns} dataSource={data} size="small"/>
            </Wrapper>
    )
}

export default OrderList
