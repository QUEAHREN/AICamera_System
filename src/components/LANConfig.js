import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';

class LANConfig extends React.Component{


    constructor(props){

        super(props);

        this.state={

        }
        
    }


    render(){
        return(

            <Layout>
                <Descriptions
                title="Responsive Descriptions"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1
                </Descriptions.Item>
                </Descriptions>
            </Layout>
        )
    }
    
}

export default LANConfig;
