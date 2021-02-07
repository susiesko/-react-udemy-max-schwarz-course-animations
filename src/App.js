import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = { 
    modalIsOpen: false,
    isInit: true
  }

  showModal = () => {
    this.setState({ modalIsOpen: true, isInit: false });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        { this.state.modalIsOpen 
          ? <Modal show={this.state.modalIsOpen} isInit={this.state.isInit} closed={this.closeModal} /> 
          : null}
        { this.state.modalIsOpen 
          ? <Backdrop show={this.state.modalIsOpen} onClick={this.closeModal} />
          : null}        
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
