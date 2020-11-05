//export {default} from './components/NewQuarkCamera';
import React, { Component } from 'react';
import NewQuarkCamera from './components/NewQuarkCamera'
const videoJsOptions = {
    controls: false,
    width: 320,
    height: 480,
    fluid: false,
    bigPlayButton: false,
    controlBar: {
        volumePanel: false
    },
    plugins: {
        record: {
            audio: false,
            video: true,
            maxLength: 10,
            displayMilliseconds: false,
            debug: true
        }
    }
  };
class IndexComponent extends Component{
    state = {
        open: false
       };
   
       handler = () => {
     //      alert(this.state.open);
           this.setState({
               open: !this.state.open
           });

       };
    render(){
        const {open} = this.state;
        return(
            <>
                <button onClick={this.handler}>OpenCamera</button>
                {open && <NewQuarkCamera onClose={this.handler} {...videoJsOptions} />}
            </>
        )
    }
}

export default IndexComponent;