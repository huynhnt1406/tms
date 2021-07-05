import styled from 'styled-components'
import {Header, OrderRight, OrderTitle} from '../styles/OrderList'
const TitleProcess = styled(OrderTitle)`
    font-size:18px;
`
const TitleTable = styled(OrderTitle)`
    font-size:20px;
`
const ButtonAct = styled.button`
   background: #367BF5;
   box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24);
   border-radius: 4px;
   width:88px;
   height:40px;
   color:white;
   border:none;
   margin-left:10px;
`
const AddProduct = styled.button`
    background: #E5EFFF;
    border-radius: 4px;
    height:32px;
    width:130px;
    color:#367BF5;
    border:none;
`
const ButtonSave = styled(ButtonAct)`
   background: white;
   color: #367BF5;
   width:100px;
   height:40px;
`
const ButtonAction = styled.button`
    background: transparent;
    width:100px;
    height:51px;
    border-right:1px solid #E3E4E5;
    border-left:none;
    border-top:none;
    border-bottom:none;
    text-align:center;
    font-size:12px;
`
const Trash = styled(ButtonAction)`
    color: #1F1F20;
`
const Rejected = styled(ButtonAction)`
    color: #F44336;
`
const Uncalled = styled(ButtonAction)`
    color: #9C27B0;
`
const Approved = styled(ButtonAction)`
    color: #4CAF50;
    border-left:1px solid #E3E4E5;
`
const HeaderProcessing = styled(Header)`
   border-bottom: 1px solid #E3E4E5;
`
const OrderLeft = styled(OrderRight)`
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`
const BodyProcessing = styled.div`
    display:flex;
    margin-left:10px;
    flex-wrap: wrap;
`
const BodyLeft = styled.div`
    width:47%;
`
const BodyRight = styled.div`
    width:53%;
    border-radius:10px;
    padding:5px;
`
const TableFooter = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding-top:5px;
    padding-bottom:5px;
`
const TableHeader = styled(TableFooter )`
    justify-content:space-between;
`

export {OrderLeft, ButtonSave, HeaderProcessing, Trash,Uncalled, Approved, Rejected, ButtonAct, TitleProcess, BodyProcessing, BodyLeft , BodyRight, TitleTable ,TableHeader, AddProduct,TableFooter}