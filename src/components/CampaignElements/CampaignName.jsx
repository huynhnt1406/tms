import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import {Input,ChangeDate,CampaignNameStyle,CampaignForm} from '../../styles/CampaignElementStyle/Elements'
import { MainFont } from '../../styles/CampaignElementStyle/Fonts';
import {Child, ChildLeft, ChildRight} from '../../styles/Contact'
function CampaignName() {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <CampaignNameStyle>
            < CampaignForm>
            <Child>
                <ChildLeft>
                    <MainFont>Campaign Name:</MainFont>
                </ChildLeft>
                <ChildRight>
                    <Input placeholder="Enter Your Compaign Name"/>
                </ChildRight>
            </Child>
            <Child>
                <ChildLeft>
                    <MainFont>Campaign Id:</MainFont>
                </ChildLeft>
                <ChildRight>
                    <Input placeholder="Enter Your Compaign ID"/>
                </ChildRight>
            </Child>
            <Child>
                <ChildLeft>
                    <MainFont>Start Date:</MainFont>
                </ChildLeft>
                <ChildRight>
                    <DatePicker 
                        style={ChangeDate}
                        format="DD-MM-YYYY HH:mm"
                        onChange={onChange} 
                        showTime={{ defaultValue: moment('16:00', 'HH:mm') }}
                    />
                </ChildRight>
            </Child>
            <Child>
                <ChildLeft>
                    <MainFont>End Date:</MainFont>
                </ChildLeft>
                <ChildRight>
                <DatePicker 
                    style={ChangeDate}
                    format="DD-MM-YYYY HH:mm"
                    onChange={onChange} 
                    showTime={{ defaultValue: moment('16:00', 'HH:mm') }}
                />
                </ChildRight>
            </Child>
            </CampaignForm>
        </CampaignNameStyle>
    )
}

export default CampaignName
