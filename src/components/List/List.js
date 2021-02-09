import React, { Component, useRef, useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

const List = props => {
  const nodeRef = useRef(null);
  const [items, setItems] = useState([1, 2, 3]);  

  const addItemHandler = () => (
    setItems( items.concat(items.length + 1) )
  );

  const removeItemHandler = selIndex => (
    setItems( items.filter((item, index) => index !== selIndex) )
  );

  const listItems = items.map( (item, index) => (
    <CSSTransition nodeRef={nodeRef} key={index} timeout={1000} classNames="fade">
      <li       
        className="ListItem" 
        onClick={() => removeItemHandler(index)}
        >{item}
      </li>
    </CSSTransition>
  ) );

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>Add Item</button>
      <p>Click Item to Remove.</p>
      <TransitionGroup 
        component="ul"
        className="List">
        {listItems}
      </TransitionGroup>
    </div>
  );
}

export default List;