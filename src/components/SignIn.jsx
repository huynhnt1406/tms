import React from 'react'
import logo from '../asset/img/logo.png'
import username from '../asset/img/username.png'
import password from '../asset/img/password.png'
import {Form, Input} from 'antd'
import {Section,Wrapper,HeaderTop, Header,ForgotPass,Button,Subtitle,Title,Image,formStyle} from '../styles/SignIn'
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
