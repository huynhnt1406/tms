import React from "react";
import { Form} from "antd";
import {
} from "./SignIn";
import { ForgotPass, Image, InputStyle, LoginButton, Section, Subtitle, Title, Wrapper } from "./style/SignIn";
import { Header } from "../orderpage/style/OrderList";
function SignIn() {
  return (
    <Section>
      <Wrapper>
        <Header>
          <HeaderTop>
            <Image src={process.env.PUBLIC_URL + '/asset/img/logo.png'} />
            <Title>Telesales management system</Title> 
          </HeaderTop>
          <Subtitle>Please login to continue.</Subtitle>
        </Header>
        <Form>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <InputStyle
              prefix={<img alt="username" src={process.env.PUBLIC_URL + '/asset/img/username.png'} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <InputStyle
              prefix={<img alt="password" src={process.env.PUBLIC_URL + '/asset/img/password.png'} />}
              suffix="SHOW"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <LoginButton>Sign In</LoginButton>
          </Form.Item>
        </Form>
        <ForgotPass>You Forgot Password?</ForgotPass>
      </Wrapper>
    </Section>
  );
}

export default SignIn;
