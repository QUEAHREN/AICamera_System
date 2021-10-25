import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Preview extends React.Component{


    constructor(props){

        super(props);

    }

    render(){
        return(
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><NavLink to='/Preview'>预览</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to='/Home'>配置</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to='/Home'>其他</NavLink></Menu.Item>
                </Menu>
                </Header>
                <Layout>
                
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    这里是视频预览页
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }


    
    
}

export default Preview;