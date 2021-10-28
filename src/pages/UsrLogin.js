import React from 'react';
import axios from '_axios@0.24.0@axios';
import '../assets/css/login.css'
import {onLogin} from '../model/mcookie'


class UsrLogin extends React.Component{


    constructor(props){

        super(props);

        this.state={

            UserName:"admin",
            Password:"00000000",
            Result:'1',
            Auth:'0',
            Token:''

        }
    }

    componentDidMount(){

        if (navigator.cookieEnabled == true){
            console.log('已启用cookie');
        }
        else{
            alert('请开启cookie');
        }

    }

    handleUseNameChange=(e)=>{
        
        this.setState({
            UserName : e.target.value
        })
    }

    handleUsePswChange=(e)=>{

        this.setState({
            Password : e.target.value
        })

    }

    keyUp=(e)=>{
        if (e.keyCode == 13){
            this.login();
        }
    }

    login=()=>{

        const _this=this;   

        axios.post('http://192.168.1.215:8080/User/Login',{
            UserName:this.state.UserName,
            Password:this.state.Password
        })
        .then(function (response) {
            _this.setState({
                Result:response.data.Result,
                Auth:response.data.Auth,
                Token:response.data.Token,
            });
            console.log(_this.props )
            if (_this.state.Result == 0){
                onLogin(_this.state.Token, _this.state.Auth, _this.state.UserName)
                _this.props.history.push('/Preview')
            }
            else{
                alert("登录失败")
            }
            
        })
        .catch(function (error) {
            console.log(error); 
            alert("登录失败")
        })


    }


    render(){
        return(
            <div>
                <div class="content">
                <div class="login-box">
                    <h1></h1>
                    <div class="output-frame">
                        <label for="username">账号</label>
                        <input type="text" id="username" autofocus  
                        onChange={this.handleUseNameChange.bind(this)}
                        onKeyUp={this.keyUp}/>
                        
                    </div>
                    <div class="output-frame">
                        <label for="password">密码</label>
                        <input type="password" id="password"
                        onChange={this.handleUsePswChange.bind(this)}
                        onKeyUp={this.keyUp}/>
                    </div>
                    <button class="login-btn"  onClick={this.login}>登录</button>
                </div>
                </div>
            </div>
        )
    }


    
    
}

export default UsrLogin;