import React ,{useState}from 'react'
import { Layout, Menu,Avatar } from 'antd';
import {PieChartFilled,VideoCameraFilled,UserOutlined,NotificationOutlined,ProfileFilled,PhoneFilled,DropboxOutlined,BarChartOutlined,ApiOutlined,SettingFilled} from '@ant-design/icons'
import {MenuUnfoldOutlined, MenuFoldOutlined ,MailOutlined ,BellOutlined} from '@ant-design/icons'
import {fontStyle, HeaderRight, SidebarTop} from '../styles/OrderDetail'
import homeimage from '../asset/img/homeimg.png'
import {ImageOrder ,TitleOrder} from '../styles/OrderDetail'
import { Badge } from 'antd';
import avatar from '../asset/img/avatar1.jpg'
import CampaignConfig from '../views/CampaignConfig'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import OrderProcessing from '../views/OrderProcessing';
import OrderList from '../views/OrderList'
import CampaignManagement from '../views/CampaignManagement';
const { Header, Sider, Content } = Layout;
function OrderDetail() {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout>
        <Sider trigger={null}  theme="light" collapsible collapsed={collapsed}>
          <Menu theme="light" mode="inline"  style={SidebarTop} >
            <Menu.Item icon={<img alt="" src={homeimage} style={ImageOrder}/>}>
              <span style={TitleOrder}>CRM System</span>
            </Menu.Item>
            </Menu>
          <Menu theme="light" style={fontStyle} mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<PieChartFilled style={{color:' #78909C'}} />} >
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraFilled style={{color:' #78909C'}} />}>
              Monitor
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined style={{color:' #78909C'}} />}>
              Customers
            </Menu.Item>
            <Menu.Item key="4" icon={<NotificationOutlined style={{color:' #78909C'}} />}>
              Campaigns
            </Menu.Item>
            <Menu.Item key="5" icon={<ProfileFilled  style={{color:' #78909C'}}/>}>
              Orders
            </Menu.Item>
            <Menu.Item key="6" icon={<PhoneFilled  style={{color:' #78909C'}}/>}>
              Callback
            </Menu.Item>
            <Menu.Item key="7" icon={<DropboxOutlined  style={{color:' #78909C'}}/>}>
                Products
          </Menu.Item>
          <Menu.Item key="8" icon={<BarChartOutlined style={{color:' #78909C'}} />}>
                Reports
          </Menu.Item>
          <Menu.Item key="9" icon={<ApiOutlined style={{color:' #78909C'}} />}>
            System Configuration
          </Menu.Item>
          <Menu.Item key="10" icon={<SettingFilled  style={{color:' #78909C'}}/>}>
            Settings
          </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header   style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'white'}}>
            <span onClick={toggle} style={{color:'#DADADA', margin:'0 !important', marginLeft:'-20px' }}>{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }</span>
            <HeaderRight>
              <Badge count={100} style={{fontSize:'8px'}}>
                <MailOutlined style={{fontSize:'24px',color:' #78909C'}} />
              </Badge>
              <Badge count={100} style={{fontSize:'8px'}}>
                <BellOutlined style={{fontSize:'24px', marginLeft:'33px',color:' #78909C'}} />
              </Badge>
              <Avatar size={40} style={{marginLeft:'33px'}} src={avatar} />
            </HeaderRight>
          </Header>
          <Content
            style={{
              margin: '10px 10px',
              padding:'0 10px 10px 10px',
              minHeight: 280,
              background:'#F0F2F5',
              overflow:'scroll',
              position:'relative',
            }}
          >
          <CampaignManagement/>
          </Content>
        </Layout>
      </Layout>
    )
}

export default OrderDetail
