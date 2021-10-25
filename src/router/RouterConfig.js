import Home from '../pages/Home.js';
import UsrLogin from '../pages/UsrLogin.js';
import Preview from '../pages/Preview.js';
import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/Home'/>
                    )}/>
                    <Route path='/Login' component={UsrLogin}/>
                    <Route path='/Home' component={Home}/>
                    <Route path='/Preview' component={Preview}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;