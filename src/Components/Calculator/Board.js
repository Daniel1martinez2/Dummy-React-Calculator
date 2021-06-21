import classes from './Board.module.css'; 
import NumberKey from './Keys/NumberKey';
import Operator from './Keys/Operator';
const Board = props => {
  return(
    <main className={classes.board}>      
        <NumberKey onClick={props.onSetScreenValue}>7</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>8</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>9</NumberKey>
        <Operator onClick={props.onSetScreenValue}>*</Operator>
        <NumberKey onClick={props.onSetScreenValue}>4</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>5</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>6</NumberKey>
        <Operator onClick={props.onSetScreenValue}>-</Operator>
        <NumberKey onClick={props.onSetScreenValue}>1</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>2</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>3</NumberKey>
        <Operator onClick={props.onSetScreenValue}>+</Operator>
        <NumberKey className={'zero'} onClick={props.onSetScreenValue}>0</NumberKey>
        <NumberKey onClick={props.onSetScreenValue}>.</NumberKey>
        <Operator className={'equal'} onClick={props.onSetResult}>=</Operator>        
    </main>
  ); 
}
export default Board;