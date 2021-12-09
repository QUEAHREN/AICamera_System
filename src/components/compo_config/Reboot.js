import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import axios from 'axios';
import {deleteCookies, getToken, logout} from '../../model/mcookie';
import { createHashHistory } from "history";
const history = createHashHistory();

class Reboot extends React.Component{


    constructor(props){

        super(props);

        this.state={
            baseUrl:window.config.baseUrl
        }
        
    }

    onReboot=()=>{

        const _this = this;
        let token = getToken();

        axios.defaults.withCredentials = true;
        axios({
            method: 'post',
            url: 'http://192.168.1.215:8080/System/Reboot',
            headers: {
                'Token': token
            }
          }).then(function (response) {
            
            console.log(response.data); 
            if (response.data.Result === 1){
                alert(response.data.ErrMsg)
                deleteCookies();
                history.push(`/login`);
                
            }else{
                alert("系统重启成功！");
            }
        })
        .catch(function (error) {
            console.log(error); 
            
        })

    }

    onSoftReboot=()=>{

        const token = getToken();
        let Url = this.state.baseUrl + '/System/SoftReboot'
        
        axios.defaults.withCredentials = true;
        axios({
            method: 'post',
            url: Url,
            headers: {
                'Token': token
            }
          }).then(function (response) {
            
            console.log(response.data); 
            if (response.data.Result === 1){
                alert(response.data.ErrMsg)
                deleteCookies();
                history.push(`/login`);
            }else{
                alert("系统软启动成功！");
            }
        })
        .catch(function (error) {
            console.log(error); 
            
        })

    }

    componentDidMount(){
        // console.log(this.state.baseUrl)
    }

    onReboot=()=>{

        let token = getToken();
        let Url = this.state.baseUrl + '/System/Reboot'

        axios.defaults.withCredentials = true;
        axios({
            method: 'post',
            url: Url,
            headers: {
                'Token': token
            }
          }).then(function (response) {
            
            console.log(response.data); 
            if (response.data.Result === 1){
                alert(response.data.ErrMsg)
                history.push(`/login`);
            }else{
                alert("系统重启成功！");
            }
        })
        .catch(function (error) {
            console.log(error); 
            
        })

    }

    onSoftReboot=()=>{

        const token = getToken();
        let Url = this.state.baseUrl + '/System/SoftReboot'

        axios.defaults.withCredentials = true;
        axios({
            method: 'post',
            url: Url,
            headers: {
                'Token': token
            }
          }).then(function (response) {
            
            console.log(response.data); 
            if (response.data.Result === 1){
                alert(response.data.ErrMsg)
                history.push(`/login`);
            }else{
                alert("系统软启动成功！");
            }
        })
        .catch(function (error) {
            console.log(error); 
            
        })

    }

    render(){
        return(
            <Layout>
                <Button type="primary" onClick={this.onReboot}>
                    重启系统
                </Button>
                <br/>
                <Button type="primary" onClick={this.onSoftReboot}>
                    系统软启动
                </Button>
            </Layout>
        )
    }
    
}

export default Reboot;
