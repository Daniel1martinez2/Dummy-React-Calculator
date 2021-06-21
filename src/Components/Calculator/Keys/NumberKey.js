import classes from './NumberKey.module.css';
import './defaultKey.css'
const NumberKey = props => {
  return(
    <button className={` key ${classes['key--number']} ${classes[props.className]} `} onClick={()=>props.onClick(props.children)}>
      {props.children}
    </button>
  ); 
}
export default NumberKey; 