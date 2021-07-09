import styled from "styled-components";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
export const MenuStyle = styled(Menu)`
  font-family: Roboto;
  font-weight: 400;
  font-size: 13p;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #000000;
  height: 91vh;
`;
export const BrandStyle = styled(Menu)`
    height:65px;
    display:flex;
    justify-content:center;
    alignItems:center;
    padding-top:9px;
`;

export const ImageOrder = {
  padding: "4px",
  backgroundColor: "#367BF5",
  borderRadius: "4px",
  marginLeft: "-7px",
};
export const TitleOrder = {
  fontFamily: "Fredoka One",
  fontSize: "18.5px",
  letterSpacing: "0.15px",
  color: "#367BF5",
};
export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderStyle = styled(Header)`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
export const ContentStyle = styled(Content)`
    margin: 10px 10px;
    padding: 0 10px 10px 10px;
    minHeight: 280;
    background: #F0F2F5;
    overflow:scroll;
`;

export const ToggleStyle = styled.span`
    color: #DADADA,
    margin: 0 !important,
    marginLeft: -20px,
`;

