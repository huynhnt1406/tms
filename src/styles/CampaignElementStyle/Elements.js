import styled from "styled-components";
import { ButtonNext } from "../Campaign";
import { Button } from "../OrderList";
import { DatePicker, Radio , Input } from "antd";
export const InputStyle = styled(Input)`
  background: #f7f9fa;
  border-radius: 4px 4px 0px 0px;
  width: 437px;
  height: 40px;
  border-bottom: 1px solid #c6cacc;
  margin-bottom: 12px;
`;
export const DatePickerStyle = styled(DatePicker)`
  background: #f7f9fa;
  border-radius: 4px 4px 0px 0px;
  width: 437px;
  height: 40px;
  border-bottom: 1px solid #c6cacc;
  margin-bottom: 12px;
`;
export const CampaignNameStyle = styled.div`
    flex:0.6;
    height:590px;
    background:white;
    display:flex;
    justify-content:center;
    align-items:center
    margin-top:30px;
    box-shadow: 0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24);
    border-radius: 6px;
`;
export const ParentStyle = styled(CampaignNameStyle)`
  flex: 1;
`;
export const CampaignForm = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;
export const SearchField = styled(Input)`
  background: #ffffff;
  border-radius: 4px;
  width: 230px;
  height: 36px;
  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.44px;
    color: #919699;
  }
`;
export const RemoveButton = styled(ButtonNext)`
  width: 150px;
  background: transparent;
  color: #f7685b;
  border: none;
  height: 36px;
`;
export const RadioStyle = styled(Radio)`
  border: 1px solid #e3e5e6;
  color: black;
  width: 100%;
  padding: 10px;
`;
export const DescStyle = {
  backgroundColor: "#F7F9FA",
};
export const NewCampaign = styled(Button)`
  display: inline-block;
`;
