import classes from './Screen.module.css'; 
const Screen = props => {
  return(
    <section className={classes.screen}>
      <h1 className={classes['screen__logic']}>{props.screenLogic}</h1>
    </section>
  ); 
}
export default Screen; 