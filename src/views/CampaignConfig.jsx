import React, { useState } from "react";
import { message, Breadcrumb } from "antd";
import {
  CampaignClass,
  CampaignHeader,
  CampaignTitle,
  StepsStyle,
  ButtonNext,
  ButtonPre,
  Cancel,
  ButtonField,
  FieldLeft,
  FieldRight,
  CampaignSteps,
  CampaignContent,
  StepStyle
} from "../styles/Campaign";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import CampaignName from "../components/CampaignElements/CampaignName";
import CallingLists from "../components/CampaignElements/CallingLists";
import CallStrategy from "../components/CampaignElements/CallStrategy";
import AgentGroups from "../components/CampaignElements/AgentGroups";
import DistributionRule from "../components/CampaignElements/DistributionRule";
import Summary from "../components/CampaignElements/Summary";
import {Link} from 'react-router-dom'
const steps = [
  {
    title: "Campaign Name",
    content: <CampaignName />,
  },
  {
    title: "Calling Lists",
    content: <CallingLists />,
  },
  {
    title: "Call Strategy",
    content: <CallStrategy />,
  },
  {
    title: "Distribution Rule",
    content: <DistributionRule />,
  },
  {
    title: "Agent Groups",
    content: <AgentGroups />,
  },
  {
    title: "Summary",
    content: <Summary />,
  },
];
function CampaignConfig() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current -1);
  };

  return (
    <CampaignClass>
      <CampaignHeader>
        <CampaignTitle>Campaign Configurations</CampaignTitle>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/campaign-manager">Campaign</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Campaign Configurations</Breadcrumb.Item>
        </Breadcrumb>
      </CampaignHeader>
      <CampaignSteps>
        <StepsStyle current={current} size="small" >
          {steps.map((item) => (
            <StepStyle key={item.title} title={item.title} />
          ))}
        </StepsStyle>
        <CampaignContent>{steps[current].content}</CampaignContent>
        <ButtonField>
          <FieldLeft>
            <Cancel>Cancel</Cancel>
          </FieldLeft>
          <FieldRight>
            {current > 0 && (
              <ButtonPre style={{ margin: "0 8px" }} onClick={() => prev()}>
                <ArrowLeftOutlined /> Back
              </ButtonPre>
            )}
            {current === steps.length - 1 && (
              <ButtonNext
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
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
  );
}

export default CampaignConfig;
