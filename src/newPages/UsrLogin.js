import React from 'react';
import axios from '_axios@0.24.0@axios';
import '../assets/css/login.css'
import { onLogin } from '../model/mcookie'


class UsrLogin extends React.Component {


    constructor(props) {

        super(props);

        this.state = {

            UserName: "admin",
            Password: "00000000",
            Result: '2',
            Auth: '0',
            Token: '',
            baseUrl: window.config.baseUrl

        }
    }

    componentDidMount() {

        if (navigator.cookieEnabled === true) {
            console.log('已启用cookie');
        }
        else {
            alert('请开启cookie');
        }

    }

    handleUseNameChange = (e) => {

        this.setState({
            UserName: e.target.value
        })
    }

    handleUsePswChange = (e) => {

        this.setState({
            Password: e.target.value
        })

    }

    keyUp = (e) => {
        if (e.keyCode === 13) {
            this.login();
        }
    }

    login = () => {

        const _this = this;
        let Url = this.state.baseUrl + '/User/Login'

        axios.post(Url, {
            UserName: this.state.UserName,
            Password: this.state.Password
        })
            .then(function (response) {
                _this.setState({
                    Result: response.data.Result,
                    Auth: response.data.Auth,
                    Token: response.data.Token,
                });
                console.log(_this.props)
                if (_this.state.Result === 0) {
                    onLogin(_this.state.Token, _this.state.Auth, _this.state.UserName)
                    _this.props.history.push('/Index')
                }
                else if (_this.state.Result === 1)
                    alert("登录失败")


            })
            .catch(function (error) {
                console.log(error);
                alert("登录失败")
            })


    }


    render() {
        return (
            <div>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="login-wrap p-4 p-md-5">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-user-o"></span>
                                    </div>
                                    <h3 class="text-center mb-4">Sign In</h3>
                                    <form action="#" class="login-form">
                                        <div class="form-group">
                                            <input type="text" class="form-control rounded-left" placeholder="Username" required
                                                onChange={this.handleUseNameChange.bind(this)}
                                                onKeyUp={this.keyUp} />
                                        </div>
                                        <div class="form-group d-flex">
                                            <input type="password" class="form-control rounded-left" placeholder="Password" required
                                                onChange={this.handleUsePswChange.bind(this)}
                                                onKeyUp={this.keyUp} />
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="form-control btn btn-primary rounded submit px-3"
                                                onClick={this.login}>Login</button>
                                        </div>
                                        <div class="form-group d-md-flex">
                                            <div class="w-50">
                                                <label class="checkbox-wrap checkbox-primary">Remember Me
                                                    <input type="checkbox" checked />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="w-50 text-md-right">
                                                <a href="#">Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }




}

export default UsrLogin;