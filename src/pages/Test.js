import React from 'react'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import videojs from 'video.js'

const url = [
    {
        url:"rtsp://192.168.1.215:554/main_stream",
        name:"监控"
    }
]


class Test extends React.Component{


    constructor(props){

        super(props);
        this.state={
            Username:'',
        }
    }

    componentDidMount(){

        
    }

    render(){
        return(
           <div>
               <easy-player
                video-url="../assers/demo.mp4"
                live="true"
                stretch="true"
                ></easy-player>
               
           </div>
        )
    }


    
    
}

export default Test;