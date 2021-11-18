import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import axios from 'axios';
import { createHashHistory } from "history";
import { deleteCookies, getToken, logout } from '../../model/mcookie'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const history = createHashHistory();

class DeviceInfo extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            Result: '',
            HardwareVersion: '',
            SystemVersion: '',
            FirmwareVersion: '',
            DeviceName: '',
            Manufacturer: '',
            DeviceModel: '',
            SerialNumber: '',
            ManufactureDate: '',
            baseUrl: window.config.baseUrl
        }
    }


    componentDidMount() {

        const _this = this;
        let token = getToken();


        let Url = this.state.baseUrl + '/System/Info/Device'


        axios.defaults.withCredentials = true;
        axios.get(Url, {
            headers: {
                'Token': token
            }
        })
            .then(function (response) {
                _this.setState({
                    Result: response.data.Result,
                    HardwareVersion: response.data.HardwareVersion,
                    SystemVersion: response.data.SystemVersion,
                    FirmwareVersion: response.data.FirmwareVersion,
                    DeviceName: response.data.DeviceName,
                    Manufacturer: response.data.Manufacturer,
                    DeviceModel: response.data.DeviceModel,
                    SerialNumber: response.data.SerialNumber,
                    ManufactureDate: response.data.ManufactureDate,
                });

                if (_this.state.Result === 1) {
                    alert(response.data.ErrMsg)
                    deleteCookies();
                    history.push(`/login`);

                }
            })
            .catch(function (error) {
                console.log(error);

            })

    }


    render() {
        return (

            // <Layout>
            //      <Descriptions
            //     bordered
            //     column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
            //     >
            //         <Descriptions.Item label="Hardware Version">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="System Version">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="Firmware Version">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="Device Name">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="Manufacturer">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="Device Model">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="Serial Number">{this.state.HardwareVersion}</Descriptions.Item>
            //         <Descriptions.Item label="Manufacture Date">{this.state.HardwareVersion}</Descriptions.Item>
            //     </Descriptions>
            // </Layout>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,
                '.cell':{
                    fontWeight:"bold"
                }}} aria-label="simple table">

                    <TableBody >
                        <TableRow >
                            <TableCell className="cell">硬件版本</TableCell>
                            <TableCell>{this.state.HardwareVersion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">系统版本</TableCell>
                            <TableCell>{this.state.SystemVersion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">固件版本</TableCell>
                            <TableCell>{this.state.FirmwareVersion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">设备名</TableCell>
                            <TableCell>{this.state.DeviceName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">制造商</TableCell>
                            <TableCell>{this.state.Manufacturer}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">设备模型</TableCell>
                            <TableCell>{this.state.DeviceModel}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">序列号</TableCell>
                            <TableCell>{this.state.SerialNumber}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="cell">生产日期</TableCell>
                            <TableCell>{this.state.ManufactureDate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

}

export default DeviceInfo;
