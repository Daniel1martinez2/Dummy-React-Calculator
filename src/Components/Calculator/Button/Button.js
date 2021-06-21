import classes from './Button.module.css'; 
const Button = props => {
  const childValue = props.children;
  let buttonType = 'key--number'; 
  if(childValue === '+' ||childValue === '-' || childValue === '*' ) buttonType = 'key--operator'; 
  if(childValue === '=') buttonType = 'equal'
  return(
    <button 
      className={`${classes.key} ${classes[buttonType]} ${childValue === '0' ? classes['zero']: ''}`} onClick={()=>props.onClick(childValue)}>{childValue}</button>
  );
}
export default Button; 