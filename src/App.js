import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';
import { evaluate } from 'mathjs';
import Logo from './components/Logo';
import { addInput, clearInput, calculateResult } from './Helpers';

function App() {
  const [input, setInput ] = useState('');

  const handleAddInput = val => {
    addInput(input, setInput, val);
  };

  const hadleClear = () => {
    clearInput( setInput );
  };

  const handleResult = () => {
    calculateResult( setInput, evaluate, input );
  };

  return (
    <div className="App">
      <Logo />
      <div className='contenedor-calculadora'>
        <Screen input={input}/>
        <div className='fila'>
          <Button handleClick={handleAddInput}>1</Button>
          <Button handleClick={handleAddInput}>2</Button>
          <Button handleClick={handleAddInput}>3</Button>
          <Button handleClick={handleAddInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={handleAddInput}>4</Button>
          <Button handleClick={handleAddInput}>5</Button>
          <Button handleClick={handleAddInput}>6</Button>
          <Button handleClick={handleAddInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={handleAddInput}>7</Button>
          <Button handleClick={handleAddInput}>8</Button>
          <Button handleClick={handleAddInput}>9</Button>
          <Button handleClick={handleAddInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={handleResult}>=</Button>
          <Button handleClick={handleAddInput}>0</Button>
          <Button handleClick={handleAddInput}>.</Button>
          <Button handleClick={handleAddInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear handleClear={hadleClear}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;