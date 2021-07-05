import React, { useState } from 'react'
import { Steps, message, Breadcrumb } from 'antd';
import {CampaignClass,CampaignHeader ,CampaignTitle, StepsStyle,ButtonNext,ButtonPre, Cancel,ButtonField,FieldLeft,FieldRight,CampaignSteps} from '../styles/Campaign'
import {ArrowRightOutlined,ArrowLeftOutlined} from '@ant-design/icons';
function CampaignConfig() {
    const { Step } = Steps;

    const steps = [
    {
        title:'Campaign Name',
        content: 'hi',
    },
    {
        title: 'Calling Lists',
        content: 'Second-content',
    },
    {
        title: 'Call Strategy',
        content: 'Last-content',
    },
    {
        title: 'Distribution Rule',
        content: 'Last-content',
    },
    {
        title: 'Agent Groups',
        content: 'Last-content',
    },
    {
        title: 'Summary',
        content: 'Last-content',
    },
    ];
    const [current, setCurrent] = useState(0)
    const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };
    
    return (
        <CampaignClass>
            <CampaignHeader>
                <CampaignTitle>Campaign Configurations</CampaignTitle>
                <Breadcrumb  >
                    <Breadcrumb.Item  >Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Campaign</Breadcrumb.Item>
                    <Breadcrumb.Item>Campaign Configurations</Breadcrumb.Item>
                </Breadcrumb>
            </CampaignHeader>
            <CampaignSteps>
                <Steps current={current} size="small" style={StepsStyle} >
                        {steps.map(item => (
                        <Step key={item.title} title={item.title}  />
                        ))}
                    </Steps>
                    <div >{steps[current].content}</div>
                    <ButtonField >
                        <FieldLeft>
                            <Cancel>Cancel</Cancel>
                        </FieldLeft>
                        <FieldRight>
                        {current >= 0 && (
                            <ButtonPre style={{ margin: '0 8px' }} onClick={() => prev()}>
                            <ArrowLeftOutlined /> Back
                            </ButtonPre>
                            )}
                            {current === steps.length - 1 && (
                            <ButtonNext type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </ButtonNext>
                            )}
                            {current < steps.length - 1 && (
                                <ButtonNext type="primary" onClick={() => next()}>
                                    Next <ArrowRightOutlined />
                                </ButtonNext>
                                )}
                        </FieldRight>
                    </ButtonField>
            </CampaignSteps>
        </CampaignClass>
    )
}

export default CampaignConfig
