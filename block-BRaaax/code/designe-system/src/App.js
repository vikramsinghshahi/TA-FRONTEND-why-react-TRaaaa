import './App.css';
import Button from './Button';
import { buttonSizes, buttonTypes } from './buttonInfo';

// function App() {
//     return (
//       <div className="App">
//         <Button label="Click Me!" />
//         <Button
//           label="Click Me!"
//           type={buttonTypes.SECONDARY}
//           size={buttonSizes.LARGE}
//         />
//         <Button
//           label="Click Me!"
//           type={buttonTypes.TERTIARY}
//           size={buttonSizes.MEDIUM}
//         />
//         <Button onClickHandler={() => alert('You Clicked me')} />
//         <Button disabled />
//       </div>
//     );
//   }

function App(){
    return <div className="App">
     <Button label="Click me"/>
     <Button label="Click me" type={buttonTypes.SECONDARY} size={buttonSizes.LARGE}/>
     <Button label="Click me" type={buttonTypes.PRIMARY} size={buttonSizes.MEDIUM}/>
     <Button onClickHandler={()=> alert("you clicked me! ")}/>
     <Button disabled/>
     </div>
}

export default App;

