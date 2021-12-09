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
import { Switch, Button } from 'antd';

const history = createHashHistory();

class SystemTime extends React.Component {



    constructor(props) {

        super(props);

        this.state = {
            localTime: new Date(),
            systemTime: '',
            baseUrl: window.config.baseUrl,
            newTime: new Date(),
            open: true

        }

    }

    componentWillMount() {

        let Url = window.config.baseUrl + '/System/Time'
        let token = getToken()
        const _this = this;

        axios.defaults.withCredentials = true;
        axios.get(Url, {
            headers: {
                'Token': token
            }
        })
            .then(function (response) {

                _this.setState({
                    systemTime: response.data.Time
                })
                if (response.data.Result === 1) {
                    alert(response.data.ErrMsg)
                    deleteCookies();
                    history.push(`/login`);
                }
            })
            .catch(function (error) {
                console.log(error);
            })

        this.timer = setInterval(() => {
            this.setState({
                localTime: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }



    onSwitchChange = (checked) => {

        this.setState({
            open: false
        })
        if (checked === true) {
            this.setState({
                localTime: new Date(),
                open: true
            })
            this.timer = setInterval(() => {
                this.setState({//  this.setState固定 更改state中的data值
                    localTime: new Date(),
                    newTime: new Date()
                })
            }, 1000);
        }
        else {
            clearInterval(this.timer);
            this.setState({
                open: false
            })
        }
    }

    onOk = (value) => {
        this.setState({
            newTime: value
        })
        console.log(this.state.newTime)
    }


    handleSubmit = () => {

        let Url = window.config.baseUrl + '/System/Time'
        let token = getToken()
        const _this = this;

        let time = moment(_this.state.newTime).utc().toISOString()
        time = time.substring(0, 19)
        console.log(time)
        axios.defaults.withCredentials = true;
        axios.put(Url,
            {           
                'Time': time   
            },
            {
                headers: {
                    'Token': token
                }
            })
            .then(function (response) {

                console.log(response.data)
                if (response.data.Result === 1) {
                    alert(response.data.ErrMsg)
                }
                else {
                    alert("修改成功，系统重启！")
                }
                deleteCookies();  
                history.push(`/login`);
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    render() {
        return (

            <div>

                <Space direction="vertical" size={12}>
                    <Space size={12}>

                        <DatePicker disabled
                            value={moment(this.state.systemTime, moment.ISO_8601)}
                            size='large' showTime />
                    </Space>
                    <DatePicker
                        disabled={this.state.open}
                        // 需要修改三目
                        value={moment(this.state.localTime, moment.ISO_8601)}

                        // value={this.state.open===1?moment(this.state.localTime, moment.ISO_8601):}
                        size='large' showTime
                        onChange={this.onChange}
                        onOk={this.onOk} />
                    <Switch defaultChecked onChange={this.onSwitchChange} />
                    <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                </Space>
            </div>
        )

    }


}

export default SystemTime