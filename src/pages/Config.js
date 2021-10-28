import React from 'react';
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import OLState from '../components/OLState'
import DeviceInfo from '../components/DeviceInfo'
import FirmwareUpload from '../components/FirmwareUpload'
import Reboot from '../components/Reboot'
import LANConfig from '../components/LANConfig'
import PortInfo from '../components/PortInfo'
import {checkToken,getUserName} from '../model/mcookie'
import GB28181Config from '../components/GB28181Config';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Config extends React.Component{


    constructor(props){

        super(props);

        this.state={
            Username:'',
            menuName:'系统',
            submenuName:'当前状态信息',
            flag:1
        }
    }

    

    clickSubMenu=(p)=>{

        const _this = this;
        checkToken(_this);

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
                    submenuName:'重启及其它操作',
                    flag:4
                })
                break; 
            case 5:
                this.setState({
                    menuName:'网络',
                    submenuName:'LAN设置',
                    flag:5
                })
                break; 
            case 6:
                this.setState({
                    menuName:'网络',
                    submenuName:'网络端口',
                    flag:6
                })
                break;        
            case 7:
                this.setState({
                    menuName:'网络',
                    submenuName:'GB28181 配置信息',
                    flag:7
                })
                break;       

        }

    }

    showComponent=()=>{
        switch(this.state.flag){
            case 1:
                return (<OLState/>);
            case 2:
                return (<DeviceInfo/>);  
            case 3:
                return (<FirmwareUpload/>);  
            case 4:
                return (<Reboot/>);  
            case 5:
                return (<LANConfig/>);  
            case 6:
                return (<PortInfo/>);      
            case 7:
                return (<GB28181Config/>);
        }

    }

    componentDidMount(){
        const _this = this;
        checkToken(_this);
        this.setState({
            Username:getUserName()
        })
        
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
                    <Menu.Item >欢迎您！用户{this.state.Username}</Menu.Item>
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
                        <Menu.Item key="4" onClick={this.clickSubMenu.bind(this, 4)}>重启及其它操作</Menu.Item>
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

