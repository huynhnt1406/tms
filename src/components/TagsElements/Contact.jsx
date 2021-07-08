import React from 'react'
import { Font,DatetimeFont,HeaderFont, InputStyle ,Id, Field1,InfoCustomer,DateandTime, ContactStyle,Field,ChildLeft,ChildRight, Child, PhoneInput,IconStyle,Element, AddressInput, DescInput,DesInput,DesByOrderInput,PaymentInput } from '../../styles/Contact'
import {InfoCircleOutlined} from '@ant-design/icons'
import {Tag} from 'antd'
function Contact() {
    return (
        <ContactStyle>
            <Field1>
                <InfoCustomer>
                    <Id >
                        <HeaderFont>Order ID:109248</HeaderFont>
                        <Tag color="red" style={{borderRadius:'30px'}}>Rejected <InfoCircleOutlined/></Tag>
                    </Id>
                    <DateandTime>
                        <DatetimeFont>Created Date:25/04/2019 6:06PM</DatetimeFont>
                        <DatetimeFont>Phone Number: 0123 456 789 </DatetimeFont>
                    </DateandTime>
                </InfoCustomer>
            </Field1>
            <Field>
                <Child>
                    <ChildLeft>
                        <Font>Name:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <InputStyle  placeholder="Trần Văn Đức"/>
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Phone number:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <Element>
                        <PhoneInput placeholder="0123456789"/><img alt="" src={process.env.PUBLIC_URL + '/asset/img/phone1.png'} style={IconStyle} />
                        </Element>
                        <Element>
                        <PhoneInput placeholder="0987654321"/><img alt="" src={process.env.PUBLIC_URL + '/asset/img/phone2.png'} style={IconStyle}  />
                        </Element>
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Location:</Font>
                    </ChildLeft>
                    <ChildRight >
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Address:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <AddressInput placeholder="Enter detail your address"/>
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Description:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <DescInput placeholder="Enter description for this order(not over 150 characters)" />
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Destination Address:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <DesInput placeholder="Enter destination address"/>
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Address Sent By Order:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <DesByOrderInput placeholder="Enter address sent by order"/>
                    </ChildRight>
                </Child>
                <Child>
                    <ChildLeft>
                        <Font>Payment:</Font>
                    </ChildLeft>
                    <ChildRight>
                        <PaymentInput prefix="hi" placeholder="Cash on delivery"/>
                    </ChildRight>
                </Child>
            </Field>
        </ContactStyle>
    )
}

export default Contact
