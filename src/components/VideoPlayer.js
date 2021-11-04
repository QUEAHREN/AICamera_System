import React from 'react'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import videojs from 'video.js'
const url = [
    {
        url:"rtmp://192.168.1.215:1936/main_stream",
        name:"监控"
    }
]
class VideoPlayer extends React.Component{
    state={
        nowPlay:""
    }
//组件挂载完成之后初始化播放控件
    componentDidMount(){
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            muted:true,
            sources: [{
                src: "rtmp://192.168.1.215:1936/main_stream",
                type: 'rtmp/mp4'
            }]
          }
        this.player = videojs('my-video', videoJsOptions , function onPlayerReady() { //(id或者refs获取节点，options，回调函数)
            videojs.log('Your player is ready!');
            // In this context, `this` is the player that was created by Video.js.
            this.play();
            // How about an event listener?
            this.on('ended', function() {
              videojs.log('Awww...over so soon?!');
            });
          }); 
    }


    
    render(){
        let li = {
            background: "cadetblue",
            padding: "11px",
            width: "fit-content",
            marginBottom:"5px",
            cursor:"pointer"
        }
        let playing = {
            background: "rgb(141, 182, 28)",
            padding: "11px",
            width: "fit-content",
            marginBottom:"5px",
            cursor:"pointer"
        }
        return(
            <div
                className="main-wrap"
            >
                <div>
                
                    <video style={{width:"50vw",height:"50vh",margin:"0 auto"}} id="my-video" className="video-js vjs-default-skin">
                    </video>
                </div>
            </div>   
        )
    }
}

export default VideoPlayer
