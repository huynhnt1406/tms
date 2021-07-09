import React from 'react'
import {Table,Badge, Progress} from 'antd'
import {PlusOutlined,SearchOutlined,EllipsisOutlined} from '@ant-design/icons'
import { ProgressContainer } from '../styles/Campaign'
import {OrderTitle, Wrapper, Header, OrderRight, InputStyle} from '../styles/OrderList'
import {NewCampaign} from '../styles/CampaignElementStyle/Elements'
import { ManageFont , TableFont } from '../styles/CampaignElementStyle/Fonts'
import {ElementTable} from '../styles/CampaignElementStyle/Fonts'
import { Link } from 'react-router-dom'
const data = [
    {
        key:1,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Stopped',
        progress : 10,
        outboundagent:23
    },
    {
        key:2,
        id:116722,
        campaignname:'Aaron Schultz',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Stopped',
        progress : 30,
        outboundagent:35
    },
    {
        key:3,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Running',
        progress : 20,
        outboundagent:45
    },
    {
        key:4,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Running',
        progress : 50,
        outboundagent:68
    },
    {
        key:5,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Waiting',
        progress : 40,
        outboundagent:12
    },
    {
        key:6,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Running',
        progress : 100,
        outboundagent:68
    },
    {
        key:7,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Waiting',
        progress : 80,
        outboundagent:12
    },
    {
        key:8,
        id:125921,
        campaignname:'Aaron Jerde',
        starttime: '2909-11-25 13:00',
        endtime : '1909-11-25 11:02',
        statustype:'Waiting',
        progress : 90,
        outboundagent:12
    }
]
function CampaignManagement() {
    const columns = [
        {
        key:'id',
        title: <TableFont>ID</TableFont>,
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        render: (id) =>  <ElementTable style={{color:'#367BF5'}}><Link to="/campaign-manager/campaign-config">{id}</Link></ElementTable>
        },
        {
        key:'campaignname',
        title: <TableFont>CAMPAIGN NAME</TableFont>,
        dataIndex: 'campaignname',
        render: campaignname => <ElementTable>{campaignname}</ElementTable>
        },
        {
        key:'starttime',
        title:<TableFont>START TIME</TableFont>,
        dataIndex: 'starttime',
        sorter: (a, b) => a.productname - b.productname,
        render: starttime => <ElementTable>{starttime}</ElementTable>
        },
        {
            key:'endtime',
            title:<TableFont>STOP DATE</TableFont>,
            dataIndex: 'endtime',
            sorter: (a, b) => a.productname - b.productname,
            render: (endtime) => <ElementTable>{endtime}</ElementTable>
        },
        {
            key:'statustype',
            title: <TableFont>STATUS</TableFont>,
            dataIndex: 'statustype',
            render: (statustype) => {
                let status= '';
                switch (statustype) {
                    case 'Stopped':
                        status = "error"
                        break;
                    case 'Running':
                        status = "success"
                        break;
                    case 'Waiting':
                        status = "warning"
                        break;
                    default:
                        break;
                }
                return(
                    <ElementTable><Badge size="default"  status={status} text={statustype}></Badge></ElementTable>
                )
            }
        },
        {
            key:'progress',
            title: <TableFont>PROGRESS</TableFont>,
            dataIndex: 'progress',
            render: (progress) => {
                let color = '';

                if(progress === 100){
                    color = '#4CAF50'
                }
                if(progress >= 25 && progress < 50){
                    color = ' #F44336'
                }
                if(progress < 25){
                    color = ' #F44336'
                }
                if(progress >= 50 && progress < 75){
                    color = '#FF9800'
                }
                if(progress >= 75 && progress <= 99){
                    color = '#2196F3'
                }
                return (
                    <ProgressContainer>
                        <ElementTable style={{ color:`${color}`, textAlign:'right',  fontFamily: 'Roboto',  letterSpacing: '0.25px', lineHeight: '20px',fontSize:' 13px', fontWeight:'1000' }}>{progress}%</ElementTable>
                        <Progress percent={progress}  strokeColor={color} showInfo={false}  />
                    </ProgressContainer>
                )
            } 
        },
        {
            key:'outboundagent',
            title: <TableFont>OUTBOUND AGENT</TableFont> ,
            dataIndex: 'outboundagent',
            render : (outboundagent) =><ElementTable>{outboundagent}</ElementTable>
        },
        {
            key:'',
            title:null,
            dataIndex: 'elipsed',
            render: elipsed => <span><EllipsisOutlined style={{color:'#78909C', fontSize:'25px'}} /></span>
        },
    ];
    return (
        <Wrapper>
            <Header>
                <OrderTitle>Campaign Management</OrderTitle>
                <OrderRight>
                    <InputStyle  placeholder="Search for anything" prefix={<SearchOutlined />}  />
                    <NewCampaign><PlusOutlined/> <ManageFont>New Campaign</ManageFont> </NewCampaign>
                </OrderRight>
            </Header>
            <Table dataSource={data} columns={columns} size="small"/>
        </Wrapper>
    )
}

export default CampaignManagement
