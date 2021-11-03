
import Config from '../pages/Config';
import UsrLogin from '../pages/UsrLogin';
import Preview from '../pages/Preview';
import Other from '../pages/Other';
import Test from '../pages/Test';

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
                        <Redirect to='/Preview'/>
                    )}/>
                    <Route path='/Login' component={UsrLogin}/>
                    <Route path='/Config' component={Config}/>
                    <Route path='/Preview' component={Preview}/>
                    <Route path='/Other' component={Other}/>                   
                    <Route path='/Test' component={Test}/>    

                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;