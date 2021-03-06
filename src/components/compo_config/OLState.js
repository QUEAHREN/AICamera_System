import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions, Badge } from 'antd';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class OLState extends React.Component{


    constructor(props){

        super(props);

        this.state={
            systemStatus:'error',
            isOline:1,
            systemStatusTxt:'错误',
            baseUrl:window.config.baseUrl
        }  

    }

    componentDidMount(){
        
        let Url = this.state.baseUrl + '/System/Info/OnlineState'

        const _this=this;  
        axios.defaults.withCredentials = true;
        axios.get(Url)
        .then(function (response) {
            _this.setState({
                isOline:response.data.Result,
            }); 
            if (_this.state.isOline === 0){
                _this.setState({
                    systemStatus:'success',
                    systemStatusTxt:'运行中'
                });
            }
            else
                _this.setState({
                    systemStatus:'error',
                    systemStatusTxt:'错误'
                });
        })
        .catch(function (error) {
            console.log(error); 
            _this.setState({
                isOline:1,   
            })
        })

    }
    
    render(){
        return(

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,
                '.cell':{
                    fontWeight:"bold"
                }}} aria-label="simple table">

                    <TableBody >

                        <TableRow>
                            <TableCell className="cell">设备状态</TableCell>
                            <TableCell><Badge status={this.state.systemStatus} text={this.state.systemStatusTxt} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            // <Layout>
            //     <Descriptions title="" bordered>               
            //         <Descriptions.Item label="设备状态" span={3} >
            //         <Badge status={this.state.systemStatus} text={this.state.systemStatusTxt} />
            //         </Descriptions.Item>       
                              
            //     </Descriptions>
                
            // </Layout>
        )
    }
    
 

}

export default OLState;
