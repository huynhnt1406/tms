import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export const ContainerLeft = styled.div`
  flex: 0.5;
  padding: 15px;
`;
export const ContainerRight = styled(ContainerLeft)``;
export const Header = styled(Container)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  background: #f1f3f4;
`;
export const RuleLeft = styled(ContainerLeft)`
  flex: 0.2;
`;
export const RuleRight = styled(ContainerLeft)`
  flex: 0.8;
`;
export const BodyRule = styled.div`
  padding: 10px;
  margin: 10px;
`;
