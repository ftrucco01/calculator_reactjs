import React, { useState } from 'react';
import './App.css';
import freecodeCampLogo from './img/freecodecamp-logo.png';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput ] = useState('');

  const addInput = val => {
    setInput( input + val );
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    if(input){
      setInput( evaluate(input) );
    }else{
      alert('Please entry a valid operation');
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Screen input={input}/>
        <div className='fila'>
          <Button handleClick={addInput} >1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear handleClear={clearInput}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;