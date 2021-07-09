import styled from "styled-components";
import { Header, OrderRight, OrderTitle } from "../styles/OrderList";
import { Input, Button, Tabs } from "antd";
const { TabPane } = Tabs;


export const TabsStyle = styled(Tabs)`
  height: 180px;
`;
export const TabPaneStyle = styled(TabPane)`
    textAlign: center; 
    color: #C6CACC;
`
export const ButtonStyle = styled(Button)`
    border: 1px solid #4CAF50,
    border-radius: 4px,
    margin-right: 5px,
`;
export const InputStyle = styled(Input)`
  height: 32px;
  width: 70px;
`;
export const TitleProcess = styled(OrderTitle)`
  font-size: 18px;
`;
export const TitleTable = styled(OrderTitle)`
  font-size: 20px;
`;
export const ButtonAct = styled.button`
  background: #367bf5;
  box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16),
    0px 2px 4px rgba(54, 123, 245, 0.24);
  border-radius: 4px;
  width: 88px;
  height: 40px;
  color: white;
  border: none;
  margin-left: 10px;
`;
export const AddProduct = styled.button`
  background: #e5efff;
  border-radius: 4px;
  height: 32px;
  width: 130px;
  color: #367bf5;
  border: none;
`;
export const ButtonSave = styled(ButtonAct)`
  background: white;
  color: #367bf5;
  width: 100px;
  height: 40px;
`;
export const ButtonAction = styled.button`
  background: transparent;
  width: 100px;
  height: 51px;
  border-right: 1px solid #e3e4e5;
  border-left: none;
  border-top: none;
  border-bottom: none;
  text-align: center;
  font-size: 12px;
`;
 export const Trash = styled(ButtonAction)`
  color: #1f1f20;
`;
export const Rejected = styled(ButtonAction)`
  color: #f44336;
`;
export const Uncalled = styled(ButtonAction)`
  color: #9c27b0;
`;
export const Approved = styled(ButtonAction)`
  color: #4caf50;
  border-left: 1px solid #e3e4e5;
`;
export const HeaderProcessing = styled(Header)`
  border-bottom: 1px solid #e3e4e5;
`;
export const OrderLeft = styled(OrderRight)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const BodyProcessing = styled.div`
  display: flex;
  margin-left: 10px;
  flex-wrap: wrap;
`;
export const BodyLeft = styled.div`
  width: 47%;
`;
export const BodyRight = styled.div`
  width: 53%;
  border-radius: 10px;
  padding: 5px;
`;
export const TableFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const TableHeader = styled(TableFooter)`
  justify-content: space-between;
`;

