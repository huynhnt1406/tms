import styled from 'styled-components'
const fontStyle = { 
    fontFamily:'Roboto',
    fontWeight:'400',
    fontSize:'13px',
    lineHeight:'20px',
    letterSpacing:'0.25px',
    color:'#000000',
    height:'91vh',
}

const ImageOrder = {
    padding:'4px',
    backgroundColor:'#367BF5',
    borderRadius:'4px',
    marginLeft:'-7px'
}
const TitleOrder = {
    fontFamily: 'Fredoka One',
    fontSize: '18.5px',
    letterSpacing: '0.15px',
    color: '#367BF5' 
}
const HeaderRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const SidebarTop = {
    height:'65px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

export {fontStyle,TitleOrder,ImageOrder, HeaderRight, SidebarTop}