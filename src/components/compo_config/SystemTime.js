import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { deleteCookies, getToken, logout } from '../../model/mcookie'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import moment from 'moment';
import 'moment/locale/zh-cn';
import { DatePicker, Space } from 'antd';
import { Paper } from '@mui/material';
import { createHashHistory } from "history";
const history = createHashHistory();

export default function SystemTime() {

    const [localTime, setLocalTime] = React.useState(new Date());
    const [systemTime, setSystemTime] = React.useState('');

    React.useLayoutEffect(() => {
        getSystemTime()
    })


    // useEffect(() => {
    //     const t = setInterval(() => {
    //         setLocalTime(new Date())

    //     }, 1000)
    //     return () => {
    //         clearTimeout(t)
    //     }
    // }, [])


    const getSystemTime = () => {

        let Url = window.config.baseUrl + '/System/Time'
        let token = getToken()

        axios.defaults.withCredentials = true;
        axios.get(Url, {
            headers: {
                'Token': token
            }
        })
            .then(function (response) {
                setSystemTime(response.data.Time)

                if (response.data.Result === 1) {
                    alert(response.data.ErrMsg)
                    deleteCookies();
                    history.push(`/login`);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

   

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }
    return (

        <div>
            <TableContainer component={Paper}>
                <Table sx={{
                    minWidth: 650,
                    '.cell': {
                        fontWeight: "bold"
                    }
                }} aria-label="simple table">

                    <TableBody >

                        <TableRow>
                            <TableCell className="cell">系统时间</TableCell>
                            <TableCell>{systemTime} </TableCell>
                        </TableRow>

                    </TableBody>

                </Table>

            </TableContainer>
            <Space direction="vertical" size={12}>
                <DatePicker disabled 
                defaultValue={moment(systemTime ,moment.ISO_8601)} 
                size='large' showTime  />
                <DatePicker 
                defaultValue={moment(localTime ,moment.ISO_8601)} 
                size='large' showTime  />
            </Space>
        </div>
    )




}

