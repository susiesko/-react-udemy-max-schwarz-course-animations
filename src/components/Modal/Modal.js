import React from 'react';
import Transition from 'react-transition-group/Transition'

import classes from './Modal.module.scss';

const animationTiming = {
  enter: 400,
  exit: 2000
}

const Modal = props => {  
  return (
    <Transition 
      mouseOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}>{
        state => {
          let cssClasses = [classes.Modal, 
            state === 'entering' 
            ? classes.ModalOpen 
            : state === 'exiting' 
            ? classes.ModalClosed 
            : null];
          return (
            <div className={cssClasses.join(' ')}>
              <h1>A Modal</h1>
              <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
          );
        }
      }</Transition>
  );
}

export default Modal;