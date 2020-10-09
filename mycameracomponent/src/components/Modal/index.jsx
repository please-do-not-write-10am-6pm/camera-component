import React, { Component } from "react";

import "video.js/dist/video-js.css";
import videojs from "video.js";
import "webrtc-adapter";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
// import Record from "videojs-record/dist/videojs.record.js";

import "./style.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  handleStart = () => {};

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      // print version information at startup
      const version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(version_info);
    });

    // device is ready
    this.player.on("deviceReady", () => {
      console.log("device is ready!");
    });

    // user clicked the record button and started recording
    this.player.on("startRecord", () => {
      console.log("started recording!");
    });

    // user completed recording and stream is available
    this.player.on("finishRecord", () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      console.log("finished recording: ", this.player.recordedData);
    });

    // error handling
    this.player.on("error", (element, error) => {
      console.warn(error);
    });

    this.player.on("deviceError", () => {
      console.error("device error:", this.player.deviceErrorCode);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const { open } = this.props;

    return (
      <div className="modal" style={{ display: open }}>
        <div className="header">
          <span className="close" onClick={this.handleClose}>
            &#10005;
          </span>
        </div>
        <div className="content">
          <div data-vjs-player>
            <video
              id="myVideo"
              ref={(node) => (this.videoNode = node)}
              className="media video-js vjs-default-skin"
              playsInline
            ></video>
          </div>
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
