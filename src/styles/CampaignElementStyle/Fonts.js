import styled from 'styled-components'

const MainFont = styled.span`
    font-family: Roboto;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: #5E6366;
`
const InputFont = styled(MainFont)`
    color:#000000;
    font-size: 16px;
    line-height: 28px;
`
const ListFont = styled(InputFont)`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.44px;
`
const RadioFont = styled(ListFont)`
    font-weight: 400;
    text-transform:uppercase;
`
const ItemFont = styled(ListFont)`
    font-weight:400;
`
const SearchFont = styled(ListFont)`
    color: #919699;
`
const ElementFont = styled(InputFont)`
    line-height: 24px;
    letter-spacing: 0.44px;
    color: rgba(0, 0, 0, 0.87);
`
const TableFont = styled.span`
    font-family: Roboto;
    font-weight:500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #919699;
`
const ElementTable = styled(TableFont)`
    text-transform:none;
    color:black;
    font-weight:800;
`
const NumberStyle = styled(TableFont)`
    color: #000000;
`
const ManageFont = styled.span`
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.75px;
    color: #FFFFFF;
`
const PercentFont =`
    fontFamily: Roboto;
    fontSize:' 10px';
    lineHeight: '20px';
    textAlign: right;
    letterSpacing: '0.25px';
`


export {NumberStyle,TableFont,ElementFont,SearchFont,ListFont,InputFont ,MainFont,ItemFont,RadioFont,ManageFont ,PercentFont,ElementTable}