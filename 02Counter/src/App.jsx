
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = useState(1);

  const addValue = () => {
    if(counter == 10){
      setCounter(10);
 }else{
   setCounter(counter + 1);
 }
  }
  const removeValue = () => {
    if(counter == 0 || counter < 0){
         setCounter(0);
    }else{
      setCounter(counter - 1);
    }
  }
  const button = {
    'background-color': 'black',
    'color':'white',
    'margin':'10px'
  };
  //let counter = 15;

  return (
    <>
     <h1>Counter Value: {counter}</h1>
     <button style={button} onClick={addValue}>Add</button>
     <br />
     <button style={button} onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
