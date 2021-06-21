import React,{useState} from 'react';
import {evaluate} from 'mathjs'; 
import Board from './Board'; 
import Screen from './Screen';
import classes from './Calculator.module.css'; 
const Calculator = props => {
  const [screenLogic, setScreenLogic] = useState(''); 
  
  const handleScreenLogic= (value) => {
    setScreenLogic(prev => `${prev}${value}`)
  
  }
  const handleResult = () =>{
    setScreenLogic(prev => evaluate(prev))
  }
  return(
    <main className={classes.calculator}>
      <Screen screenLogic={screenLogic}></Screen>
      <Board onSetScreenValue={handleScreenLogic} onSetResult={handleResult}></Board>
    </main>
  ); 
}
export default Calculator; 