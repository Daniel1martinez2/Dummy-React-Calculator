import classes from './Board.module.css'; 
import Button from './Button/Button';

const Board = props => {
  return(
    <main className={classes.board}>
      <Button onClick={props.onSetScreenValue}>7</Button>      
      <Button onClick={props.onSetScreenValue}>8</Button>      
      <Button onClick={props.onSetScreenValue}>9</Button>      
      <Button onClick={props.onSetScreenValue}>*</Button>      
      <Button onClick={props.onSetScreenValue}>4</Button>      
      <Button onClick={props.onSetScreenValue}>5</Button>      
      <Button onClick={props.onSetScreenValue}>6</Button>      
      <Button onClick={props.onSetScreenValue}>-</Button>      
      <Button onClick={props.onSetScreenValue}>1</Button>      
      <Button onClick={props.onSetScreenValue}>2</Button>      
      <Button onClick={props.onSetScreenValue}>3</Button>      
      <Button onClick={props.onSetScreenValue}>+</Button>      
      <Button onClick={props.onSetScreenValue}>0</Button>      
      <Button onClick={props.onSetScreenValue}>.</Button>      
      <Button onClick={()=>props.onSetResult()}>=</Button>      
    </main>
  ); 
}
export default Board;