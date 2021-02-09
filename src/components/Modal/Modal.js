import React, { useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.scss';

const animationTiming = {
  enter: 400,
  exit: 2000
}

const Modal = props => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mouseOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed'
      }}>{
        state => {
          return (
            <div className='Modal' ref={nodeRef}>
              <h1>A Modal</h1>
              <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
          );
        }
      }</CSSTransition>
  );
}

export default Modal;