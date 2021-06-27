import classes from './Board.module.css'; 
import Button from './Button/Button';

const Board = props => {
  const buttonsValue = ['7','8','9','*','4','5','6','-','1','2','3','+','0','.']; 
  return(
    <main className={classes.board}>
      {buttonsValue.map(btn =><Button onClick={props.onSetScreenValue}>{btn}</Button>)}
      <Button onClick={()=>props.onSetResult()}>=</Button>      
    </main>
  ); 
}
export default Board;
//