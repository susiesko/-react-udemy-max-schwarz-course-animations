import React from 'react';

import classes from './Modal.module.scss';

const Modal = props => {  
  let cssClasses = [classes.Modal, 
    props.show === 'entering' 
    ? classes.ModalOpen 
    : props.show === 'exiting' 
    ? classes.ModalClosed 
    : null];
  if (props.isInit){
    cssClasses.push(classes.ModalInit);
  }

  return (
    <div className={cssClasses.join(' ')}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
  );
}

export default Modal;