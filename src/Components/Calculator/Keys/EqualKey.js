import classes from './Operator.module.css'; 
import './defaultKey.css'; 
const EqualKey = props => {
  return(
    <button className={`key ${classes['key--operator']} ${classes[props.className]}`} onClick={()=>props.onClick(props.children)} >
      {props.children}
    </button>
  ); 
}
export default EqualKey; 