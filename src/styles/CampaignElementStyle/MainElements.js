import styled from "styled-components";


const Container = styled.div`
    display:flex;
    width:100%;
`
const ContainerLeft = styled.div`
    flex:0.5;
    padding:15px;
`
const ContainerRight = styled(ContainerLeft)``
const Header = styled(Container)`
    justify-content:space-between;
    align-items:center;
    padding:6px 16px;
    background:#F1F3F4;
`
const RuleLeft = styled(ContainerLeft)`
    flex:0.2;
`
const RuleRight = styled(ContainerLeft)`
    flex:0.8;
`
const BodyRule = styled.div`
    padding:10px;
    margin:10px;
`
export {Container,ContainerLeft,ContainerRight, Header,RuleRight,RuleLeft,BodyRule}

