import cookie from 'react-cookies';
 
// 获取当前用户token
export const getToken = () => {
    return cookie.load('Token');
};

// 获取当前用户UserName
export const getUserName = () => {
    return cookie.load('UserName');
};
 
// 用户登录，保存cookie
export const onLogin = (Token, Auth, UserName) => {

    let inFifteenMinutes = new Date(new Date().getTime() + 3000 * 1000);
    cookie.save('Token', Token, { path: '/', expires: inFifteenMinutes });
    cookie.save('Auth', Auth, { path: '/', expires: inFifteenMinutes });
    cookie.save('UserName', UserName, { path: '/', expires: inFifteenMinutes });
    
};
 
// 用户登出，删除cookie
export const logout = (props) => {
    console.log(props)
    cookie.remove('Token');
    cookie.remove('Auth');
    cookie.remove('UserName');
    props.history.push('/login');
};

// 检测token是否过期
export const checkToken = (_this) =>{

    let token = getToken();
    console.log(token)
    if (typeof(token) === "undefined" ){
        alert('登录已失效！');
        if (typeof(_this.props) === "undefined" )   _this.history.push('/login');
        else                                        _this.props.history.push('/login');
    }
  

}