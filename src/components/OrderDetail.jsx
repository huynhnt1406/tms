import React ,{useState}from 'react'
import { Layout, Menu } from 'antd';
import {PieChartFilled,VideoCameraFilled,UserOutlined,NotificationOutlined,ProfileFilled,PhoneFilled,DropboxOutlined,BarChartOutlined,ApiOutlined,SettingFilled} from '@ant-design/icons'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import {fontStyle} from '../styles/OrderDetail'
import homeimage from '../asset/img/homeimg.png'
import {HeaderTop} from '../styles/SignIn'
import {ImageOrder, TitleOrder} from '../styles/OrderDetail'
const { Header, Sider, Content } = Layout;
function OrderDetail() {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{height:'100vh'}}>
        <Sider trigger={null} style={{width:'236px'}} collapsible collapsed={collapsed}>
          <Menu theme="light" style={fontStyle} mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item icon={<ImageOrder alt="home-img" src={homeimage} style={{marginLeft:'-10px',textAlign:'center'}}/>}>
                <TitleOrder>CRM System</TitleOrder>
            </Menu.Item>
            <Menu.Item key="1" icon={<PieChartFilled style={{color:' #78909C'}} />}>
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
          <Header   style={{ background:'white', paddingLeft:'10px'}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
}

export default OrderDetail
