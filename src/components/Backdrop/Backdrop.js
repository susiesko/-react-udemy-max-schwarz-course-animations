import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = props => {
  const cssClasses = [classes.Backdrop, props.show ? classes.BackdropOpen : classes.BackdropClosed];

  return (
    <div onClick={props.onClick} className={cssClasses.join(' ')}></div>
  );
}

export default Backdrop;
