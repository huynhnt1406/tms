import styled from "styled-components";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
const MenuStyle = styled(Menu)`
  font-family: Roboto;
  font-weight: 400;
  font-size: 13p;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #000000;
  height: 91vh;
`;
const BrandStyle = styled(Menu)`
    height:65px;
    display:flex;
    justify-content:center;
    alignItems:center;
    padding-top:9px;
`;

const ImageOrder = {
  padding: "4px",
  backgroundColor: "#367BF5",
  borderRadius: "4px",
  marginLeft: "-7px",
};
const TitleOrder = {
  fontFamily: "Fredoka One",
  fontSize: "18.5px",
  letterSpacing: "0.15px",
  color: "#367BF5",
};
const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderStyle = styled(Header)`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const ContentStyle = styled(Content)`
    margin: 10px 10px;
    padding: 0 10px 10px 10px;
    minHeight: 280;
    background: #F0F2F5;
    overflow:scroll;
`;

const ToggleStyle = styled.span`
    color: #DADADA,
    margin: 0 !important,
    marginLeft: -20px,
`;
export {
  TitleOrder,
  ImageOrder,
  HeaderRight,
  HeaderStyle,
  ContentStyle,
  ToggleStyle,
  MenuStyle,
  BrandStyle
};
