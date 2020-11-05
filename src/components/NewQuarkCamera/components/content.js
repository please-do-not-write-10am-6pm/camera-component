import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
// import Record from 'videojs-record/dist/videojs.record.js';

// import styles from './QuarkCamera.scss'
import "./contentStyle.scss";


class VideoContent extends Component {
    
   

    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, () => {
            // print version information at startup
            const version_info = 'Using video.js ' + videojs.VERSION +
                ' with videojs-record ' + videojs.getPluginVersion('record') +
                ' and recordrtc ' + RecordRTC.version;
            videojs.log(version_info);
            

            this.player.record().getDevice();
        });
        //console.log(this.player.record().getDevice());
        // device is ready
        this.player.on('deviceReady', () => {
            console.log('device is ready!');
        });

        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            console.log('started recording!');
        });

        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            // recordedData is a blob object containing the recorded data that
            // can be downloaded by the user, stored on server etc.

            this.props.componentSetting.on('afterVideoRecord',()=>{
                console.log('finished recording: ', this.player.recordedData);
            })
        });

        // error handling
        this.player.on('error', (element, error) => {
            console.warn(error);
        });

        this.player.on('deviceError', () => {
            console.error('device error:', this.player.deviceErrorCode);
        });
    }

    UNSAFE_componentWillReceiveProps (nextProps){
    }

    componentWillUnmount() {
        if (this.player) this.player.dispose();
    }

    // Take the photo and present in canvas
    takePhoto = () =>{
        const { sendFile } = this.props;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.videoNode, 0, 0, 50, 50 );
        console.log(this.props);
        this.canvas.toBlob(()=>{return sendFile}, 'image/*');

        this.props.componentSetting.on('afterSnap',()=>{
            console.log('finish SnapPhoto');
            //alert("snap");
        })
    };
    popupSnapShot = () =>{
        const context = this.canvas1.getContext('2d');
        context.drawImage(this.canvas,0,0,100,100);
    }
    render() {
        return (
          <div>
            <video ref={node => this.videoNode = node} className="video-js vjs-default-skin"></video>
            <div className="CameraBottom">

                <div className='toolbtn' onClick={this.popupSnapShot}>
                    <canvas width="50px" height="50px" style={{borderRadius:'50%'}} ref={ref => (this.canvas = ref)} />
                </div>
                <div className='toolbtn' style={{width:'60px',height:'60px',boxShadow:'0px 0px 0px 3px black, 0px 0px 3px 3px white'}} onClick={this.takePhoto}></div>
                <div className='toolbtn' onClick={this.showCameraList}>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>
            </div>
            <div>
                <canvas width="100" height="100" ref={ref=>(this.canvas1=ref)}/>
            </div>
          </div>
        )
    }
}


export default VideoContent;