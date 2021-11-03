import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import {checkToken,getUserName} from '../model/mcookie'
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

class Preview extends React.Component{


    constructor(props){

        super(props);
        this.state={
            Username:'',
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
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><NavLink to='/Preview'>预览</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to='/Config'>配置</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to='/Other'>其他</NavLink></Menu.Item>
                    <Menu.Item >欢迎您！用户{this.state.Username}</Menu.Item>
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
                    {/* <VideoPlayer></VideoPlayer> */}
                    <easy-player
                        id="player"
                        // video-url  undefined 容易白屏 设置为 ''
                        video-url= ''
                        fluent="true" // 流畅模式
                        stretch // 是否拉伸
                        muted="true" // 是否静音
                        hide-big-play-button
                        live="false"
                        autoplay
                        controls
            
                        // aspect="fullscreen" // 长比高的值过大 可能导致样式布局变化  不随外层div大小
                        />
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }


    
    
}

export default Preview;