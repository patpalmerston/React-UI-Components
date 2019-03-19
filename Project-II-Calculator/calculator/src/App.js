import React from 'react';
import './App.css';
// import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calculator'>

      <CalculatorDisplay text='0' />
      <ActionButton text='clear'/>
      <NumberButton text='÷' />
      <NumberButton buttonStyle='white' text='1' />
      <NumberButton buttonStyle='white' text='2' />
      <NumberButton buttonStyle='white' text='3' />
      <NumberButton text='x' />
      <NumberButton buttonStyle='white' text='4' />
      <NumberButton buttonStyle='white' text='5' />
      <NumberButton buttonStyle='white' text='6' />
      <NumberButton text='-' />
      <NumberButton buttonStyle='white' text='7' />
      <NumberButton buttonStyle='white' text='8' />
      <NumberButton buttonStyle='white' text='9' />
      <NumberButton text='+' />
      <ActionButton text='0'/>
      <NumberButton text='=' />
      
    </div>
  );
};

export default App;
