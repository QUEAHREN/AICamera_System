import React from 'react';
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import OnlineStateTest from './configPages/OnlineStateTest'
import OLState from '../components/OLState'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Config extends React.Component{


    constructor(props){

        super(props);

        this.state={
            menuName:'系统',
            submenuName:'当前状态信息'
        }
    }

    setName


    render(){
        return(
            // <div>
            //     <ul className="menu">
            //         <li><NavLink to='/Home'>第一个页面</NavLink></li>
            //         <li><NavLink to='/login'>第二个页面</NavLink></li>
                    
            //     </ul>

            // </div>
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><NavLink to='/Preview'>预览</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to='/Config'>配置</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to='/Other'>其他</NavLink></Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="系统">
                        <Menu.Item key="1"><NavLink to='/Config/OnlineState'>当前状态信息</NavLink></Menu.Item>
                        <Menu.Item key="2">设备相关信息</Menu.Item>
                        <Menu.Item key="3">上传固件</Menu.Item>
                        <Menu.Item key="4">重启软件</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="网络">
                        <Menu.Item key="5">LAN 设置</Menu.Item>
                        <Menu.Item key="6">网络端口</Menu.Item>
                        <Menu.Item key="7">GB28181 配置信息</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="媒体">
                        <Menu.Item key="9">拍摄图片</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>配置</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.menuName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.submenuName}</Breadcrumb.Item>
                    
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    <OnlineStateTest></OnlineStateTest>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
    
}

export default Config;

