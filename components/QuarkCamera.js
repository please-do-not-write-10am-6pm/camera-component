import React, { useEffect, useState } from 'react'
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,

} from '@coreui/react'
import Draggable from 'react-draggable';
import videojs from 'video.js';

import "./style.scss";

const QuarkModals = (props) => {
    const [primary, setPrimary] = useState(false)

    useEffect(() => {
        this.player = videojs(videoNode, props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    });

    return (
        <div className="camera">
            <CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">
                Primary modal
            </CButton>
            <Draggable>
                <CModal
                    show={primary}
                    onClose={() => setPrimary(!primary)}
                    color="primary"
                >
                    <CModalHeader closeButton></CModalHeader>

                    <CModalBody>
                        <figure className="asset" data-vjs-player>
                            <video ref={ node => this.videoNode = node } playsinline class="video-js vjs-default-skin"></video>
                        </figure>
                    </CModalBody>

                    <CModalFooter>
                        <div className="actions">
                            <CButton className="clik"></CButton>

                        </div>
                    </CModalFooter>
                </CModal>
            </Draggable>
        </div>
    )
}

export default QuarkModals
