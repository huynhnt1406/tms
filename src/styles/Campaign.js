import styled from 'styled-components'
import {OrderTitle} from '../styles/OrderList'

const CampaignTitle = styled(OrderTitle)`
    font-size:18px;
`

const CampaignClass = styled.div`
    display:flex;
    flex-direction:column;
`
const CampaignHeader = styled(CampaignClass)`
    padding:9px 16px 5px 16px;
    border-bottom:1px solid #E3E4E5;
`
const StepsStyle = {
    padding:'20px 15px',
    backgroundColor : ' #DAF5F2',
    border:'1px solid #069697',
    borderRadius:'6px'
}
const StepStyle = {
    color:' #7BC6BD'
}
const FontCampaign = styled.span`
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color: #000000;
`
const ButtonNext = styled.button`
    border: 1px solid #367BF5;
    box-sizing: border-box;
    border-radius: 4px;
    width:100px;
    height:40px;
    color:white;
    background-color: #367BF5;
    font-size:16px;
`
const ButtonPre = styled(ButtonNext)`
    color: #367BF5;
    background-color: white;
`
const Cancel = styled(ButtonNext)`
    background-color:transparent;
    color:#F7685B;
    border:none;
`
const ButtonField = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:white;
`
const FieldLeft = styled.div`
`
const FieldRight =styled(ButtonField)`

`
const CampaignSteps = styled(CampaignClass)``
export {CampaignClass,CampaignHeader ,CampaignTitle, StepsStyle,StepStyle,FontCampaign,ButtonNext,ButtonPre, Cancel,ButtonField,FieldLeft,FieldRight,CampaignSteps}