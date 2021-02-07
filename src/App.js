import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter: 400,
  exit: 1000
};

class App extends Component {
  state = { 
    modalIsOpen: false,
    showBlock: false,
    isInit: true
  }

  showModal = () => {
    this.setState({ modalIsOpen: true, isInit: false });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  toggleClick = () => {
    this.setState(prevState => ({ showBlock: !prevState.showBlock }))
  }

  blockTransitionHandler = state => {
    const blockStyle = {
      backgroundColor: 'red', 
      width: 100, 
      height: 100, 
      margin: 'auto',
      opacity: state === 'exiting' || state === 'entering' ? 0 : 1,
      transition: 'opacity 500ms ease-out'
    };

    return <div style={blockStyle}>{state}</div>;
  }

  render() {
    const blockStyle = {
      backgroundColor: 'red', 
      width: 100, 
      height: 100, 
      margin: 'auto'
    };

    //let block = <div style={blockStyle}></div>;

    const block = (
      <Transition 
        in={this.state.showBlock}
        timeout={300}
        mouseOnEnter
        unmountOnExit
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => console.log('onEntered')}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
      >
        { this.blockTransitionHandler }
      </Transition>
    );

    return (
      <div className="App">
        <h1>React Animations</h1>
        <p><button className="Button" onClick={this.toggleClick}>Toggle</button></p>
        {block}
        <Modal show={this.state.modalIsOpen} isInit={this.state.isInit} closed={this.closeModal} /> 

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
