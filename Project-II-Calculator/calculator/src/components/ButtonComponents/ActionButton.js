import React from 'react';
import './Button.css';


const ActionButton = props => <button className={`actionButtonStyles ${props.buttonStyle}`}>{props.text}</button>;

ActionButton.defaultProps = {
  buttonStyle: "white",
  
};


export default ActionButton;