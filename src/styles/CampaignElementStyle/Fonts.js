import styled from "styled-components";

export const MainFont = styled.span`
  font-family: Roboto;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #5e6366;
`;
export const InputFont = styled(MainFont)`
  color: #000000;
  font-size: 16px;
  line-height: 28px;
`;
export const ListFont = styled(InputFont)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
`;
export const RadioFont = styled(ListFont)`
  font-weight: 400;
  text-transform: uppercase;
`;
export const ItemFont = styled(ListFont)`
  font-weight: 400;
`;
export const SearchFont = styled(ListFont)`
  color: #919699;
`;
export const ElementFont = styled(InputFont)`
  line-height: 24px;
  letter-spacing: 0.44px;
  color: rgba(0, 0, 0, 0.87);
`;
export const TableFont = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #919699;
`;
export const ElementTable = styled(TableFont)`
  text-transform: none;
  color: black;
  font-weight: 800;
`;
export const NumberStyle = styled(TableFont)`
  color: #000000;
`;
export const ManageFont = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.75px;
  color: #ffffff;
`;
export const PercentFont = `
    fontFamily: Roboto;
    fontSize:' 10px';
    lineHeight: '20px';
    textAlign: right;
    letterSpacing: '0.25px';
`;
