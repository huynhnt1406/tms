import styled from "styled-components";
import { Input } from "antd";
export const Font = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #5e6366;
`;
export const HeaderFont = styled(Font)`
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.44px;
`;
export const DatetimeFont = styled(Font)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #919699;
  margin-right: 21px;
`;
export const InputFont = styled(Font)`
  color: black;
`;
export const Id = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DateandTime = styled(Id)`
  justify-content: flex-start;
`;
export const InfoCustomer = styled(Id)`
  flex-direction: column;
`;
export const ContactStyle = styled(InfoCustomer)``;
export const Field1 = styled(InfoCustomer)`
  margin-bottom: 16px;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TableProduct = styled(Field)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5),
    0px 2px 4px rgba(54, 123, 245, 0.24);
  border-radius: 10px;
  padding: 5px;
`;
export const ProductInfo = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5),
    0px 2px 4px rgba(54, 123, 245, 0.24);
  border-radius: 10px;
  padding: 5px;
  margin-top: 10px;
`;
export const Child = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const ChildLeft = styled.div`
  flex: 0.25;
`;
export const ChildRight = styled.div`
  flex: 0.75;
`;
export const InputStyle = styled(Input)`
  background: #f1f3f4;
  border: 1px solid #e3e5e6;
  box-sizing: border-box;
  border-radius: 4px;
  width: 395px;
  height: 28px;
  &::placehoder: {
    color: #f1f3f4;
  }
  outline: none;
  text-align: flex-start;
  margin-bottom: 10px;
  width: 100%;
`;
export const PhoneInput = styled(InputStyle)`
  width: 357px;
  width: 100%;
  margin:0;
  padding:0;
`;
export const AddressInput = styled(InputStyle)`
  background: white;
  height: 56px;
`;
export const DescInput = styled(AddressInput)`
  height: 84px;
`;
export const DesByOrderInput = styled(AddressInput)`
  background-color: #f1f3f4;
`;
export const IconStyle = {
  background: "#4CAF50",
  boxSshadow:
    "0px 4px 8px rgba(47, 168, 79, 0.16), 0px 2px 4px rgba(47, 168, 79, 0.24)",
  borderRadius: "4px",
  padding: "6.5px",
  marginLeft: "8px",
};
export const Element = styled.div`
  display: flex;
  align-items: center;
`;
export const CascaderStyle = {
  height: "28px",
  width: "122px",
  marginRight: "15px",
  borderRadius: "4px",
  background: "#FFFFFF",
  border: "1px solid #E3E5E6",
};
