import React, { useEffect, useRef, useState } from 'react';
import axios from '_axios@0.24.0@axios';
import '../assets/css/login.css'
import { onLogin } from '../model/mcookie'


export default function UsrLogin(props) {



    const [UserName, setUserName] = useState("admin");
    const [Password, setPassword] = useState("00000000");
    const [Result, setResult] = useState(2);
    const [Auth, setAuth] = useState("0");
    const [Token, setToken] = useState("");
    const baseUrl = window.config.baseUrl;

    useEffect(() => {

        if (navigator.cookieEnabled === true) {
            console.log('已启用cookie');
        }
        else {
            alert('请开启cookie');
        }
        console.log('=======')
        console.log(Result)
        if (Result === 0) {
            onLogin(Token, Auth, UserName)
            props.history.push('/Index')
        }
        else if (Result === 1)
            alert("登录失败")


    }, [Result])


    function handleUserNameChange(e) {

        setUserName(e.target.value);
    }

    function handleUserPswChange(e) {

        setPassword(e.target.value);

    }

    function keyUp(e) {
        if (e.keyCode === 13) {
            login();
        }
    }


    function login() {

        let Url = baseUrl + '/User/Login'
        var data;
        (async => {
            axios.post(Url, {
                UserName: UserName,
                Password: Password
            })
                .then(function (resp) {
                    const result = await resp.data.Result;
                    console.log(result);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("登录错误")
                })
        });
    }



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
                                            onChange={handleUserNameChange}
                                            onKeyUp={keyUp} />
                                    </div>
                                    <div class="form-group d-flex">
                                        <input type="password" class="form-control rounded-left" placeholder="Password" required
                                            onChange={handleUserPswChange}
                                            onKeyUp={keyUp} />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="form-control btn btn-primary rounded submit px-3"
                                            onClick={login}>Login</button>
                                    </div>

                                    <div class="form-group d-md-flex">
                                        {/* <div class="w-50">
                                            <label class="checkbox-wrap checkbox-primary">Remember Me
                                                <input type="checkbox"  />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="w-50 text-md-right">
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
