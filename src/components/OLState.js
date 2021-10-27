import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions, Badge } from 'antd';


class OLState extends React.Component{


    constructor(props){

        super(props);

        this.state={
            systemStatus:'success'
        }
        
    }


    render(){
        return(

            <Layout>
                <Descriptions title="" bordered>               
                    <Descriptions.Item label="设备状态" span={3}>
                    <Badge status={this.state.systemStatus} text="运行中" />
                    </Descriptions.Item>                 
                </Descriptions>
            </Layout>
        )
    }
    
}

export default OLState;
