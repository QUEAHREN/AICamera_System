import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import axios from 'axios';
import { createHashHistory } from "history";
import {getToken} from '../../model/mcookie'
const history = createHashHistory();

class GB28181Config extends React.Component{


    constructor(props){

        super(props);

        this.state={
            Result:'',
            ServerID:'',
            ServerIP:'',
            ServerPort:'',
            AlarmID:'',
            UserName:'',
            UserPassword:'',
            MediaPort: '',		
            SessionPort: '',	
            SpeakerPort: '',		
            OpenEncode: '',			
            OpenRecord:'',			
            OpenAlarm:'',
            baseUrl:window.config.baseUrl	
        }
        
    }

    componentDidMount(){

        const _this = this;
        let token = getToken();
        
        let Url = this.state.baseUrl + '/GB28181/Base'

        axios.defaults.withCredentials = true;
        axios.get(Url,{
            headers: {
                'Token': token
            }
        })
        .then(function (response) {
            _this.setState({
                Result: response.data.Result,
                ServerID:response.data.ServerID,
                ServerIP:response.data.ServerIP,
                ServerPort:response.data.ServerPort,
                IpcID:response.data.IpcID,
                AlarmID:response.data.AlarmID,
                UserName:response.data.UserName,
                UserPassword:response.data.UserPassword,
                MediaPort: response.data.MediaPort,		
                SessionPort: response.data.SessionPort,	
                SpeakerPort: response.data.SpeakerPort,		
                OpenEncode: response.data.OpenEncode,			
                OpenRecord:response.data.OpenRecord,			
                OpenAlarm:response.data.OpenAlarm	
            });
            console.log(response.data)
            if (_this.state.Result === 1){
                alert(response.data.ErrMsg)
                history.push(`/login`);
            }
        })
        .catch(function (error) {
            console.log(error); 
        })

    }



    render(){
        return(

            <Layout>
                <Descriptions
                title="当前 GB28121 参数信息"
                bordered
                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
                >
                <Descriptions.Item label="Server ID">{this.state.ServerID}</Descriptions.Item>
                <Descriptions.Item label="Server IP">{this.state.ServerIP}</Descriptions.Item>
                <Descriptions.Item label="Server Port">{this.state.ServerPort}</Descriptions.Item>
                <Descriptions.Item label="Ipc ID">{this.state.IpcID}</Descriptions.Item>
                <Descriptions.Item label="Alarm ID">{this.state.AlarmID}</Descriptions.Item>
                <Descriptions.Item label="User Name">{this.state.UserName}</Descriptions.Item>
                <Descriptions.Item label="User Password">{this.state.UserPassword}</Descriptions.Item>
                <Descriptions.Item label="Media Port">{this.state.MediaPort}</Descriptions.Item>
                <Descriptions.Item label="Session Port">{this.state.SessionPort}</Descriptions.Item>
                <Descriptions.Item label="Speaker Port">{this.state.SpeakerPort}</Descriptions.Item>
                <Descriptions.Item label="Open Encode">{this.state.OpenEncode}</Descriptions.Item>
                <Descriptions.Item label="Open Record">{this.state.OpenRecord}</Descriptions.Item>
                <Descriptions.Item label="Open Alarm">{this.state.OpenAlarm}</Descriptions.Item>
                
                </Descriptions>
            </Layout>
        )
    }
    
}

export default GB28181Config;
