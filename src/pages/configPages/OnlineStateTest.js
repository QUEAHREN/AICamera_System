import React from 'react';
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



    


class OnlineStateTest extends React.Component{


    constructor(props){

        super(props);

        this.state={
            menuName:'系统',
            submenuName:'当前状态信息'
        }
    }

    onFinish = () => {

    };
  
    onFinishFailed = () => {

    };

    render(){
        return(

            <Layout>
                 <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}

                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Layout>
        )
    }
    
}

export default OnlineStateTest;
