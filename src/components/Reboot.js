import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Reboot extends React.Component{


    constructor(props){

        super(props);

        this.state={

        }
        
    }


    render(){
        return(
            <Layout>
                <Button type="primary" block>
                    重启软件
                </Button>
            </Layout>
        )
    }
    
}

export default Reboot;
