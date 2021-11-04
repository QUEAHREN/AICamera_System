import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import axios from 'axios';
import { createHashHistory } from "history";
const history = createHashHistory();

class LANConfig extends React.Component{


    constructor(props){

        super(props);

        this.state={
            Result:'',
            DHCP:'',
            IPv4Address:'',
            MAC:'',
            IPv4Netmask:'',
            IPv4Gateway:'',
            DNS:'',
            baseUrl:window.config.baseUrl
        }
        
    }

    componentDidMount(){

        // const _this = this;
        // let token = getToken();

        // let Url = this.state.baseUrl + '/Network/LAN/Config'

        // axios.defaults.withCredentials = true;
        // axios.get(Url,{
        //     headers: {
        //         'Token': token
        //     }
        // })
        // .then(function (response) {
        //     _this.setState({
        //         Result: response.data.Result,
        //         DHCP: response.data.DHCP,
        //         IPv4Address: response.data.IPv4Address,
        //         MAC: response.data.MAC,
        //         IPv4Netmask: response.data.IPv4Netmask,
        //         IPv4Gateway: response.data.IPv4Gateway,
        //         DNS: response.data.DNS,
        //     });
        //     console.log(response.data); 
        //     if (_this.state.Result === 1){
        //         alert(response.data.ErrMsg)
        //         history.push(`/login`);
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error); 
            
        // })

    }
    render(){
        return(

            <Layout>
                <Descriptions
                title="当前LAN参数"
                bordered
                column={{ xxl: 3, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
                >
                <Descriptions.Item label="DHCP">{this.state.DHCP}</Descriptions.Item>
                <Descriptions.Item label="IPv4 Address">{this.state.IPv4Address}</Descriptions.Item>
                <Descriptions.Item label="MAC">{this.state.MAC}</Descriptions.Item>
                <Descriptions.Item label="IPv4 Netmask">{this.state.IPv4Netmask}</Descriptions.Item>
                <Descriptions.Item label="IPv4 Gateway">{this.state.IPv4Gateway}</Descriptions.Item>
                <Descriptions.Item label="DNS">{this.state.DNS}</Descriptions.Item>
                
                </Descriptions>
            </Layout>
        )
    }
    
}

export default LANConfig;
