import React from 'react';
import './Button.css';





const NumberButton = props => <button className={`numberButtonStyles ${props.buttonStyle}`}>{props.text}</button>;

NumberButton.defaultProps = {
  buttonStyle: "red",
  fontStyle: 'fontWhite'
};


export default NumberButton;