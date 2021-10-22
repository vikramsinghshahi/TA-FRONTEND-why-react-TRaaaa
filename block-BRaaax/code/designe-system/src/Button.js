import { buttonSizes, buttonTypes } from './buttonInfo';
// function Button(props) {
//   function getStyles() {
//     let { type = buttonTypes.PRIMARY, size = buttonSizes.MEDIUM } = props;
//     return `button button--${type} button--${size}`;
//   }
//   return (
//     <button
//       onClick={props.onClickHandler}
//       className={getStyles()}
//       disabled={props.disabled}
//     >
//       {props.label || 'Button'}
//     </button>
//   );
// }

function Button(props){
    function getStyles(){
        let { type = buttonTypes.PRIMARY , size= buttonSizes.MEDIUM } = props;
        return `button button--${type} button--${size}`
    }
    return <button onClick={props.onClickHandler} className={getStyles()} disabled={props.disabled} >{props.label || "Button"}</button>
}

export default Button;