import styled from 'styled-components'
import {Image} from '../styles/SignIn'
const fontStyle = { 
    fontFamily:'Roboto',
    fontWeight:'400',
    fontSize:'12px',
    lineHeight:'20px',
    letterSpacing:'0.25px',
    color:'#000000',
    height:'100%',
}

const ImageOrder = styled(Image)`
    padding:4px;
    margin:0;
`
const TitleOrder = styled.span`
    font-family: Fredoka One;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: #367BF5 ;
    margin-left:0;
`
export {fontStyle,TitleOrder,ImageOrder}