import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import {checkToken,getUserName} from '../model/mcookie'
import Paperbase from  '../newPages/Paperbase'

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

        // var script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.async = true;
        // script.src = 'http://127.0.0.1:8080/plugins/jquery.min.js';
        // document.head.appendChild(script);    

      }
        
    



    render(){

        return(
            <Paperbase></Paperbase>
            // <Layout>
            //     <Header className="header">
            //     <div className="logo" />
            //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            //         <Menu.Item key="1"><NavLink to='/Preview'>预览</NavLink></Menu.Item>
            //         <Menu.Item key="2"><NavLink to='/Config'>配置</NavLink></Menu.Item>
            //         <Menu.Item key="3"><NavLink to='/Other'>其他</NavLink></Menu.Item>
            //         <Menu.Item >欢迎您！用户{this.state.Username}</Menu.Item>
            //     </Menu>
            //     </Header>

            //     <Layout>
                
            //     <Layout style={{ padding: '0 24px 24px' }}>
            //         <Content
            //         className="site-layout-background"
            //         style={{
            //             padding: 24,
            //             margin: 0,
            //             minHeight: 280,
            //         }}
            //         >
            //         <VideoPlayer></VideoPlayer>
                    
            //         {/* <ReactJWPlayer
            //             playerId='my-unique-id'
            //             playerScript='https://link-to-my-jw-player/script.js'
            //             playlist='https://link-to-my-playlist.json'
            //         /> */}
            //         </Content>
            //     </Layout>

            //     </Layout>
       
            // </Layout>
        )
    }


    
    
}

export default Preview;