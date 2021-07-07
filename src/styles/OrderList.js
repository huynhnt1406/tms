import styled from 'styled-components'
import {Input} from 'antd'
   const OrderTitle = styled.h4`
   font-family: Roboto;
   font-size: 24px;
   line-height: 28px;    
   display: flex;
   align-items: center;
   letter-spacing: 0.25px;
   color: rgba(0, 0, 0, 0.87);
   font-weight:400;
   margin:0;
   padding:0;
`
const Wrapper = styled.div``
const OrderRight = styled.div`
   display:flex;
   justify-content:center;
   align-items:center
`
const Button = styled.button`
   background: #367BF5;
   box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24);
   border-radius: 4px;
   width:130px;
   height:36px;
   color:white;
   border:none;
   margin-left:10px;
`
const InputStyle  = styled(Input)`
   background-color: #F7F9FA !important,
   border-radius: 4px,
   width:230px,
   height:36px,
`
const Header = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:18px;
   backgroun-color:white;
`

export {Header, Wrapper, OrderRight,OrderTitle,Button , InputStyle}