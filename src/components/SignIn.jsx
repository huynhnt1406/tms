import React from 'react'
import styled from 'styled-components'
import logo from '../asset/img/logo.png'
import username from '../asset/img/username.png'
import password from '../asset/img/password.png'
import {Form, Input} from 'antd'
import background from '../asset/img/signin.png'
const Section =styled.section`
    min-height:100vh;
    background:url(${background}) no-repeat center;
    display:flex;
`

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex:0.5;

`

const Image = styled.img`
    background-color:#367BF5;
    border-radius:4px;
    margin-right:9px;
`
const Title = styled.text`
    font-family: Fredoka One;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: white; 
`
const HeaderTop =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const Subtitle = styled.text`
    font-family: Roboto;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15px;
    color: white;
    margin-bottom:39px;
    margin-top:8px;
`
const Header = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column
`
const formStyle = {
    background: '#FFFFFF',
    border: '1px solid #EBEBEB',
    boxSizing: 'border-box',
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
    text-align: center;
    color: #FFFFFF;
    border: none;
`
const ForgotPass = styled.text`    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: white;
`
function SignIn() {
    return (
        <Section>
            <Wrapper>
                <Header>
                    <HeaderTop>
                        <Image src={logo}/>
                        <Title>Telesales Management System</Title>
                    </HeaderTop>
                    <Subtitle>Please login to continue.</Subtitle>
                </Header>
                <Form >
                    <Form.Item 
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<img alt="username" src={username}/>} style={formStyle} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input prefix={<img alt="password" src={password}/>}  style={formStyle}  suffix="SHOW"  placeholder="Password" />         
                    </Form.Item>
                    <Form.Item>
                    <Button>Sign In</Button>
                    </Form.Item>
                </Form>
                <ForgotPass>You Forgot Password?</ForgotPass>
            </Wrapper>
        </Section>
    )
}


export default SignIn
