import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Empty } from 'antd';

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
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1"><NavLink to='/Preview'>预览</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to='/Config'>配置</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to='/Other'>其他</NavLink></Menu.Item>
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
                    <Empty></Empty>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }


    
    
}

export default Preview;