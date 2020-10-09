import React, { Component } from 'react'

import Modal from "./components/Modal"
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "block"
    }
  }

  openModal = () => {
    this.setState({
      display: "block"
    });
  }

  closeModal = () => {
    this.setState({
      display: "none"
    });
  }

  render() {
    const { display } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.openModal}>Open Camera</button>

        <Modal open={display} onClose={this.closeModal} />
      </div>
    )
  }
}