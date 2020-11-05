/* eslint-disable */
import React, { Component } from 'react';
import Draggable from 'react-draggable';

//VIDEO STUFF
import 'video.js/dist/video-js.min.css';
import 'videojs-record/dist/css/videojs.record.css';


import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import Record from 'videojs-record/dist/videojs.record.js';
import VideoContent from './content';
//END VIDEO STUFF
import "./style.scss";

class NewQuarkCamera extends Component {
       
    
        componentDidMount() {
        }
    
        // destroy player on unmount
        componentWillUnmount() {
            if (this.player) {
                this.player.dispose();
                
            }
        }
        render(){
            
            return(
                <>
                <Draggable>
                    <div className="Camera"> 
                        <div className="CameraTitle" style={{cursor:'move'}}>
                            <span style={{color:'white'}} onClick={this.props.onClose}>X</span>
                        </div>
                        <div className="CameraContent">
                            <VideoContent {...this.props} />
                        </div>
                        <div className="CameraTool">
                        </div>
                    </div>
                </Draggable>
                </>
            )
        }

}
export default NewQuarkCamera;