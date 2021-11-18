import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import axios from 'axios';
import { createHashHistory } from "history";
import {deleteCookies, getToken, logout} from '../../model/mcookie'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
                deleteCookies();
                history.push(`/login`);
            }
        })
        .catch(function (error) {
            console.log(error); 
        })

    }



    render(){
        return(

            // <Layout>
            //     <Descriptions
            //     title="当前 GB28121 参数信息"
            //     bordered="true"
            //     size="small"
            //     column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
            //     >
            //     <Descriptions.Item label="Server ID">{this.state.ServerID}</Descriptions.Item>
            //     <Descriptions.Item label="Server IP">{this.state.ServerIP}</Descriptions.Item>
            //     <Descriptions.Item label="Server Port">{this.state.ServerPort}</Descriptions.Item>
            //     <Descriptions.Item label="Ipc ID">{this.state.IpcID}</Descriptions.Item>
            //     <Descriptions.Item label="Alarm ID">{this.state.AlarmID}</Descriptions.Item>
            //     <Descriptions.Item label="User Name">{this.state.UserName}</Descriptions.Item>
            //     <Descriptions.Item label="User Password">{this.state.UserPassword}</Descriptions.Item>
            //     <Descriptions.Item label="Media Port">{this.state.MediaPort}</Descriptions.Item>
            //     <Descriptions.Item label="Session Port">{this.state.SessionPort}</Descriptions.Item>
            //     <Descriptions.Item label="Speaker Port">{this.state.SpeakerPort}</Descriptions.Item>
            //     <Descriptions.Item label="Open Encode">{this.state.OpenEncode}</Descriptions.Item>
            //     <Descriptions.Item label="Open Record">{this.state.OpenRecord}</Descriptions.Item>
            //     <Descriptions.Item label="Open Alarm">{this.state.OpenAlarm}</Descriptions.Item>
                
            //     </Descriptions>
            // </Layout>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,
                '.cell':{
                    fontWeight:"bold"
                }}} aria-label="simple table">

                    <TableBody >
                        <TableRow >
                            <TableCell className="cell">服务器ID</TableCell>
                            <TableCell>{this.state.ServerID}</TableCell>
                            <TableCell className="cell">服务器IP</TableCell>
                            <TableCell>{this.state.ServerIP}</TableCell>
                        </TableRow>
                       
                        <TableRow>
                            <TableCell className="cell">服务器端口</TableCell>
                            <TableCell>{this.state.ServerPort}</TableCell>
                            <TableCell className="cell">Ipc ID</TableCell>
                            <TableCell>{this.state.IpcID}</TableCell>
                        </TableRow>
                        <TableRow>  
                            <TableCell className="cell">用户名</TableCell>
                            <TableCell>{this.state.UserPassword}</TableCell>
                            <TableCell className="cell">用户密码</TableCell>
                            <TableCell>{this.state.UserPassword}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">报警ID</TableCell>
                            <TableCell>{this.state.AlarmID}</TableCell>
                            <TableCell className="cell">媒体端口</TableCell>
                            <TableCell>{this.state.MediaPort}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">会话端口</TableCell>
                            <TableCell>{this.state.SessionPort}</TableCell>
                            <TableCell className="cell">扬声器端口</TableCell>
                            <TableCell>{this.state.SpeakerPort}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">开放编码</TableCell>
                            <TableCell>{this.state.OpenEncode}</TableCell>
                            <TableCell className="cell">Open Record</TableCell>
                            <TableCell>{this.state.OpenRecord}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">OpenAlarm</TableCell>
                            <TableCell>{this.state.OpenAlarm}</TableCell>
                        </TableRow>
                      
                        
                    </TableBody>
                </Table>
            </TableContainer>    

            )
    }
    
}

export default GB28181Config;
