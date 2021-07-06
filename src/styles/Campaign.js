import styled from 'styled-components'
import { OrderTitle } from '../styles/OrderList'

const CampaignTitle = styled(OrderTitle)`
    font-size:18px;
`

const CampaignClass = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`
const ProgressContainer = styled(CampaignClass)``
const CampaignHeader = styled(CampaignClass)`
    padding:9px 16px 5px 16px;
    border-bottom:1px solid #E3E4E5;
`
const StepsStyle = {
    padding: '20px 15px',
    backgroundColor:  '#DAF5F2',
    border: '1px solid #069697',
    borderRadius: '6px'
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
const CampaignContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`
const ButtonField = styled(CampaignContent)`
    justify-content:space-between;
    background:white;
    margin:0;
    padding:0 24px 0 24px;
    height:64px;
    border-top:1px solid #E7EEF0;
    display:flex;
    flex-wrap:wrap;
`
const FieldLeft = styled.div`
`
const FieldRight = styled(ButtonField)`
    display:flex;
`
const CampaignSteps = styled(CampaignClass)``


export {
    CampaignClass, CampaignHeader, CampaignTitle, StepsStyle, FontCampaign, ButtonNext, ButtonPre, Cancel, ButtonField,
    FieldLeft, FieldRight, CampaignSteps, CampaignContent,ProgressContainer 
}