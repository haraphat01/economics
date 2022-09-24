
import { useState, useEffect, React, useReducer } from 'react';
import './App.css';
import Main from './Main';


let initialState = {
  first_counter: 0
}
let reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {
  
  const [inc, dispatcher] = useReducer(reducer, initialState)
  // const [number, setNumber] = useState(0)
  // let init = 0;
//   function inc() {
//        setNumber(prev => prev + 1 )
//   }

  function dec() {
    if (dispatcher('decrement') === 0) {
      return  dispatcher('reset')
    }
    dispatcher('decrement')
}

// function ze() {
//   setNumber(init)
// }

// useEffect(
//   () =>{
//     document.title = `fuck you ${number}`
//   }
// )
  return (
    <div className="App">
     
    
      <p>{inc.first_counter}</p>
       <button onClick={() => dispatcher({type:'increment'})}> increase</button>
       <button onClick={() =>dispatcher({type:'decrement'})}> Decrease</button>
       <button onClick={() => dispatcher({type:'reset'})}> Zero</button>
  
      <Main/>
   

       </div>
  );
}

export default App;
