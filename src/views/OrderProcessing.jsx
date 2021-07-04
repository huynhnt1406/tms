import React from 'react'
import {Breadcrumb} from 'antd'
import { Wrapper , OrderRight} from '../styles/OrderList'
import {OrderLeft, ButtonSave, HeaderProcessing, Trash,Uncalled, Approved, Rejected, ButtonAct, TitleProcess,BodyProcessing, BodyLeft , BodyRight,TableHeader,TitleTable,AddProduct,TableFooter} from '../styles/OrderProcessing'
import {ProductInfo,TableProduct} from '../styles/Contact'
import {Table,Cascader, Input, Button} from 'antd'
import {EllipsisOutlined,CheckOutlined , DeleteOutlined } from '@ant-design/icons'
import alertinfo from '../asset/img/alert.jpg'
import Tags from '../components/Tags'
function OrderProcessing() {
    const columns = [
        {
        key:'product',
        title: 'PRODUCT NAME',
        dataIndex: 'productname',
        render : productname => <span style={{color:'#367BF5'}}>{productname}</span>
        },
        {
        key:'stock',
        title: 'STOCK',
        dataIndex: 'stock',
        },
        {
        key:'price',
        title: 'PRICE',
        dataIndex: 'price',
        render : price => <span>{price}đ</span>
        },
        {
            key:'qty',
            title:<span>
                    QTY
                <img alt="" src={alertinfo}/>
                </span>,
            dataIndex: 'qty',
        },
        {
            key:'total',
            title: 'TOTAL',
            dataIndex: 'total',
            render: total => <span>{total}đ</span>
        },
        {
            key:'',
            title:null,
            dataIndex: 'elipsed',
            render: elipsed => <span><EllipsisOutlined style={{color:'#78909C', fontSize:'25px'}} /></span>
        },
    ];
    const data = []
    return (
            <Wrapper>
                <HeaderProcessing>
                    <OrderLeft>
                        <TitleProcess>Order Processing</TitleProcess>
                        <Breadcrumb  >
                        <Breadcrumb.Item  >Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Orders List</Breadcrumb.Item>
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
                    <BodyLeft style={{fontSize:'10px;'}}>
                        <Tags/>
                    </BodyLeft>
                    <BodyRight >
                        <TableProduct >
                            <TableHeader >
                                <TitleTable>Products</TitleTable>
                                <AddProduct>+ Add Product</AddProduct>
                            </TableHeader>
                            <Table columns={columns} dataSource={data} size="small" pagination={false}   />
                            <TableFooter>
                                <Cascader placeholder="Select product" style={{height:'32px' ,width:'130px',marginRight:'20px'}}/>
                                <Cascader placeholder="Select stock" style={{height:'32px' ,width:'120px',marginRight:'20px'}}/>
                                <Cascader placeholder="Price" style={{height:'32px' ,width:'70px',marginRight:'30px'}}/>
                                <Input placeholder="Quantity" style={{height:'32px' ,width:'70px'}} />
                                <span style={{width:'70px', height:'32px', textAlign:'center'}}>Ođ</span>
                                <Button icon={<CheckOutlined style={{color:'#4CAF50'}} />} style={{border:'1px solid #4CAF50', borderRadius:'4px', marginRight:'5px'}} />
                                <Button  icon={<DeleteOutlined style={{color:'#F7685B'}} />}  style={{border:'1px solid #F7685B', borderRadius:'4px'}} />
                            </TableFooter>  
                        </TableProduct>
                        <ProductInfo>
                            hi
                        </ProductInfo>
                    </BodyRight>
                </BodyProcessing>
            </Wrapper>
    )
}

export default OrderProcessing
