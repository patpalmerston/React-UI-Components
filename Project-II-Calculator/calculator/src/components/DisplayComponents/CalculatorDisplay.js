import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
  return <button className={`calculatorButtonStyles ${props.buttonStyle}`}>{props.text}</button>
};

CalculatorDisplay.defaultProps = {
  buttonStyle: "black",
  
};

export default CalculatorDisplay;