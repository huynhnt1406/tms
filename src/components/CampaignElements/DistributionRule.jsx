import React, { useState } from 'react'
import {  RadioStyle ,DescStyle, ParentStyle } from '../../styles/CampaignElementStyle/Elements'
import { Container ,RuleRight,RuleLeft, Header,BodyRule } from '../../styles/CampaignElementStyle/MainElements'
import {ListFont, RadioFont} from '../../styles/CampaignElementStyle/Fonts'
import { Radio} from 'antd';
const rules = [
    {
        id:1,
        title:'LIFO',
        description:'Last in, first out (LIFO) is a method used to account for inventory that records the most recently produced items as sold first. Under LIFO, the cost of the most recent products purchased (or produced) are the first to be expensed as cost of goods sold (COGS), which means the lower cost of older products will be reported as inventory'
    },
    {
        id:2,
        title:'FIFO',
        description:'FIFO stands for First In, First Out. It is as simple as it sounds. When using this method of warehouse management, the oldest stock of inventory is shipped out first. The newest inventory stays until the oldest is shipped out to stores or directly to consumers.'
    },
    {
        id:3,
        title:'MIX_2_1',
        description:'MIX_2_1'
    },
    {
        id:4,
        title:'MIX_3_1',
        description:'Mix_3_1'
    },
    {
        id:5,
        title:'MIX_4_1',
        description:'MIX_4_1'
    },
]
function DistributionRule() {
    const [value, setValue] = useState(1);

    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const [desc, setDesc] = useState('Last in, first out (LIFO) is a method used to account for inventory that records the most recently produced items as sold first. Under LIFO, the cost of the most recent products purchased (or produced) are the first to be expensed as cost of goods sold (COGS), which means the lower cost of older products will be reported as inventory')
    return (
        <ParentStyle>
            <Container>
                <RuleLeft>
                    <Header>
                        <ListFont>Distribution Rule</ListFont>
                    </Header>
                    <Radio.Group onChange={onChange} value={value} style={{display:'flex',flexDirection:'column'}}>
                       {
                           rules.map(rule => (
                            <RadioStyle value={rule.id} onClick={() => setDesc(rule.description)} ><RadioFont>{rule.title}</RadioFont></RadioStyle>
                           ))
                       }
                    </Radio.Group>
                </RuleLeft>
                <RuleRight>
                    <Header style={{backgroundColor:'white'}}>
                        <ListFont>Description:</ListFont>
                    </Header>
                    <BodyRule style={DescStyle}>
                        <RadioFont style={{textTransform:'none'}} >{desc}</RadioFont>
                    </BodyRule>
                </RuleRight>
            </Container>
        </ParentStyle>
    )
}

export default DistributionRule
