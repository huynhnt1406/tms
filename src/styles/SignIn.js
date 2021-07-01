import background from '../asset/img/signin.png'
import styled from 'styled-components'
const blockStyle = styled.span`
    font-family:'Roboto';
    color:white;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
`
const Section =styled.section`
    min-height:100vh;
    background:url(${background}) no-repeat center ;
    display:flex;
`
const HeaderTop =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const Wrapper = styled(HeaderTop)`
    flex-direction:column;
    flex:0.5;
`

const Image = styled.img`
    background-color:#367BF5;
    border-radius:4px;
    margin-right:9px;
`
const Title = styled.span`
    font-family: Fredoka One;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: white; 
`

const Subtitle = styled.span`
    font-family: Roboto;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: white;
    margin-bottom:39px;
    margin-top:8px;
`
const Header = styled(HeaderTop)`
    flex-direction:column
`
const formStyle = {
    background: '#FFFFFF',
    border: '1px solid #EBEBEB',
    borderRadius: '4px',
    height:'48px',
    width:'448px'
}
const Button = styled.button`
    background: #367BF5;
    border-radius: 4px;
    width:448px;
    height:48px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    border:none;
`   
const ForgotPass = styled(blockStyle)`    
`

export {ForgotPass,Button,formStyle,Header,HeaderTop,Subtitle,Title,Image,Section,Wrapper}