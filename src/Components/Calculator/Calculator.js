import React,{useState} from 'react';
import Board from './Board'; 
import Screen from './Screen';
import classes from './Calculator.module.css'; 
const Calculator = props => {
  const [screenLogic, setScreenLogic] = useState(''); 
  const [init, setInit] = useState(false); 
  const handleScreenLogic= (value) => {
    setScreenLogic(prev => `${prev}${value}`)
    setInit(true); 
  }
  const handleResult = () =>{
    const resultScreen = eval(`${screenLogic}`); 
    setScreenLogic(resultScreen)
    console.log(resultScreen);
  }
  return(
    <main className={classes.calculator}>
      <Screen screenLogic={screenLogic} init={init}></Screen>
      <Board onSetScreenValue={handleScreenLogic} onSetResult={handleResult}></Board>
    </main>
  ); 
}
export default Calculator; 