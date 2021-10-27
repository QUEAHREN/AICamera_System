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
            submenuName:'当前状态信息',
            flag:1
        }
    }

    setName

    clickSubMenu=(p)=>{
        switch(p){
            case 1:
                this.setState({
                    menuName:'系统',
                    submenuName:'当前状态信息',
                    flag:1
                })
                break;
            case 2:
                this.setState({
                    menuName:'系统',
                    submenuName:'设备相关信息',
                    flag:2
                })
                break;  
            case 3:
                this.setState({
                    menuName:'系统',
                    submenuName:'上传固件',
                    flag:3
                })
                break; 
            case 4:
                this.setState({
                    menuName:'系统',
                    submenuName:'重启软件',
                    flag:4
                })
                break; 
        }

    }

    showComponent=()=>{
        switch(this.state.flag){
            case 1:
                return (<OLState/>);
            case 2:
                return (<h1>hhh</h1>);  
            case 3:
                return (<h1>hh22h</h1>);  
            case 4:
                return (<h1>hh33</h1>);  

        }

    }

    render(){
        return(
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
                        <Menu.Item key="1" onClick={this.clickSubMenu.bind(this, 1)}>当前状态信息</Menu.Item>
                        <Menu.Item key="2" onClick={this.clickSubMenu.bind(this, 2)}>设备相关信息</Menu.Item>
                        <Menu.Item key="3" onClick={this.clickSubMenu.bind(this, 3)}>上传固件</Menu.Item>
                        <Menu.Item key="4" onClick={this.clickSubMenu.bind(this, 4)}>重启软件</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="网络">
                        <Menu.Item key="5" onClick={this.clickSubMenu.bind(this, 5)}>LAN 设置</Menu.Item>
                        <Menu.Item key="6" onClick={this.clickSubMenu.bind(this, 6)}>网络端口</Menu.Item>
                        <Menu.Item key="7" onClick={this.clickSubMenu.bind(this, 7)}>GB28181 配置信息</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="媒体">
                        <Menu.Item key="8" onClick={this.clickSubMenu.bind(this, 8)}>拍摄图片</Menu.Item>
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
                    {/* <OnlineStateTest></OnlineStateTest> */}

                    {this.showComponent()}

                     
                    
                    
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
    
}

export default Config;

