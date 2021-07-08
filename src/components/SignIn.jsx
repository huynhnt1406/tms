import React from "react";
import { Form} from "antd";
import {
  Section,
  Wrapper,
  HeaderTop,
  Header,
  ForgotPass,
  ButtonLogin,
  Subtitle,
  Title,
  Image,
  InputStyle,
} from "../styles/SignIn";
function SignIn() {
  return (
    <Section>
      <Wrapper>
        <Header>
          <HeaderTop>
            <Image src={process.env.PUBLIC_URL + '/asset/img/logo.png'} />
            <Title>Telesales Management System</Title>
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
            <ButtonLogin>Sign In</ButtonLogin>
          </Form.Item>
        </Form>
        <ForgotPass>You Forgot Password?</ForgotPass>
      </Wrapper>
    </Section>
  );
}

export default SignIn;
