import styled from 'styled-components'

const Font = styled.span`
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:20px;
    letter-spacing:0.25px;
    color:#5E6366 ;
`
const HeaderFont = styled(Font)`
    color:black;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.44px;
`
const DatetimeFont = styled(Font)`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color:#919699;
    margin-right:21px;
`
const InputFont = styled(Font)`
    color:black;
`
const Id = styled.div`
    display:flex;
    justify-content:space-between;
`
const DateandTime = styled(Id)`
    justify-content:flex-start;
`
const InfoCustomer = styled(Id)`
    flex-direction:column;
`
const ContactStyle = styled(InfoCustomer)``
const Field1 = styled(InfoCustomer)`
    margin-bottom:16px;
`
const Field = styled.div`
    display:flex;
    flex-direction:column;
`
const TableProduct = styled(Field)`
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5), 0px 2px 4px rgba(54, 123, 245, 0.24);
    border-radius:10px;
    padding:5px;
`
const ProductInfo =styled.div`
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5), 0px 2px 4px rgba(54, 123, 245, 0.24);
    border-radius:10px;
    padding:5px;
    margin-top:10px;
`
const Child = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
`
const ChildLeft = styled.div`
    flex:0.25;
`
const ChildRight = styled.div`
    flex:0.75;
`
const InputField = styled.input`
    background: #F1F3F4;
    border: 1px solid #E3E5E6;
    box-sizing: border-box;
    border-radius: 4px;
    width:395px;
    height:28px;
    &::placehoder:{
        color:#F1F3F4;
    }
    outline:none;
    text-align:flex-start;
`
const PhoneInput = styled(InputField)`
    width:357px;
`
const AddressInput = styled(InputField)`
    background:white;
    height:56px;
    margin-top:10px;
`
const DescInput = styled(AddressInput)`
    height:84px;
    margin-top:10px;
`
const DesInput = styled(AddressInput)`
    margin-top:10px;
`
const DesByOrderInput = styled(AddressInput)`
    background-color:#F1F3F4;
    margin-top:10px;
`
const PaymentInput = styled(InputField)`
    margin-top:10px;
`
const IconStyle = {
    background: '#4CAF50',
    boxSshadow: '0px 4px 8px rgba(47, 168, 79, 0.16), 0px 2px 4px rgba(47, 168, 79, 0.24)',
    borderRadius: '4px',
    padding:'6.5px',
    marginLeft:'8px'
}
const Element = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
`
const CascaderStyle = {
    height:'28px',
    width:'122px',
    marginRight:'15px',
    borderRadius:'4px',
    background:'#FFFFFF',
    border: '1px solid #E3E5E6',
}
export {InputFont,DatetimeFont,HeaderFont,Font, Id,DateandTime,InfoCustomer, Field1, ContactStyle, Field,ChildLeft,ChildRight, Child, InputField, PhoneInput, IconStyle, Element,  CascaderStyle ,AddressInput, DescInput,DesInput,DesByOrderInput,PaymentInput,TableProduct, ProductInfo}