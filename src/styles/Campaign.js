import styled from "styled-components";
import { OrderTitle } from "../styles/OrderList";
import { Steps } from "antd";
const { Step } = Steps;
export const CampaignTitle = styled(OrderTitle)`
  font-size: 18px;
`;

export const CampaignClass = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ProgressContainer = styled(CampaignClass)``;
export const CampaignHeader = styled(CampaignClass)`
  padding: 9px 16px 5px 16px;
  border-bottom: 1px solid #e3e4e5;
`;
export const StepsStyle = styled(Steps)`
    padding: 20px 15px;
    background: #DAF5F2;
    border: 1px solid #069697;
    border-radius: 6px;
    color:'red';
`;
export const StepStyle = styled(Step)`
  color:green;
`;
export const FontCampaign = styled.span`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #000000;
`;
export const ButtonNext = styled.button`
  border: 1px solid #367bf5;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  color: white;
  background-color: #367bf5;
  font-size: 16px;
`;
export const ButtonPre = styled(ButtonNext)`
  color: #367bf5;
  background-color: white;
`;
export const Cancel = styled(ButtonNext)`
  background-color: transparent;
  color: #f7685b;
  border: none;
`;
export const CampaignContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const ButtonField = styled(CampaignContent)`
  justify-content: space-between;
  background: white;
  margin: 0;
  padding: 0 24px 0 24px;
  height: 64px;
  border-top: 1px solid #e7eef0;
  display: flex;
  flex-wrap: wrap;
`;
export const FieldLeft = styled.div``;
export const FieldRight = styled(ButtonField)`
  display: flex;
`;
export const CampaignSteps = styled(CampaignClass)``
