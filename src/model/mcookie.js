import cookie from 'react-cookies';
 
// 获取当前用户cookie
export const getToken = () => {
    return cookie.load('Token');
};
 
// 用户登录，保存cookie
export const onLogin = (Token, Auth, UserName) => {

    let inFifteenMinutes = new Date(new Date().getTime() + 60 * 1000);
    cookie.save('Token', Token, { path: '/', expires: inFifteenMinutes });
    cookie.save('Auth', Auth, { path: '/', expires: inFifteenMinutes });
    cookie.save('UserName', UserName, { path: '/', expires: inFifteenMinutes });
};
 
// 用户登出，删除cookie
export const logout = () => {
    cookie.remove('Token');
    window.location.href = '/';
};