import React from 'react';
import axios from '_axios@0.24.0@axios';
import '../assets/css/login.css'
import { onLogin } from '../model/mcookie'
import { checkToken2 } from '../model/mcookie';
import { createHashHistory } from "history";
const history = createHashHistory();

class UsrLogin extends React.Component {


    constructor(props) {

        super(props);

        this.state = {

            UserName: "",
            Password: "",
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
        if (checkToken2(this) === 1)
            this.props.history.push('/index');
            
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

    handleClick = (e) => {
        
        //防止重复刷新
        e.preventDefault()
        console.log(1111)
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
                
                if (response.data.Result === 0) {
                   
                    onLogin(response.data.Token, _this.state.Auth, _this.state.UserName)
                    history.push('/Index')
                }
                else if (_this.state.Result === 1){          
                    alert("登录失败")
                    
                }


            })
            .catch(function (error) {

                // history.push('/Index')
                alert("登录失败")
            })
            
    }


    render() {
        return (
            <div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-5">
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-user-o"></span>
                                    </div>
                                    <h3 className="text-center mb-4">Sign In</h3>
                                    <form action="#" className="login-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control rounded-left" placeholder="Username" required
                                                onChange={this.handleUseNameChange.bind(this)}
                                                onKeyUp={this.keyUp} />
                                        </div>
                                        <div className="form-group d-flex">
                                            <input type="password" className="form-control rounded-left" placeholder="Password" required
                                                onChange={this.handleUsePswChange.bind(this)}
                                                onKeyUp={this.keyUp} />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary rounded submit px-3"
                                                onClick={this.handleClick}>Login</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            {/* <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary">Remember Me
                                                    <input type="checkbox" checked />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#">Forgot Password</a>
                                            </div> */}
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