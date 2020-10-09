import React, { Component } from "react";
import Webcam from "react-webcam";

import "./style.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "",
    };
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  handleStart = () => {
      
    
  };

  render() {
    const { open } = this.props;
    const { src } = this.state;

    return (
      <div className="modal" style={{ display: open }}>
        <div className="header">
          <span className="close" onClick={this.handleClose}>
            &#10005;
          </span>
        </div>
        <div className="content">
          <video className="media" id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline></video>
        </div>

        <div className="actions">
          <div className="media"></div>
          <div className="clik" onClick={this.handleStart}></div>
          <div className="change">
            <span className="icon">&#8635;</span>
          </div>
        </div>
      </div>
    );
  }
}
