
import { useState, useEffect, React, useReducer } from 'react';
import './App.css';
import Main from './Main';


let initialState = {
  loading: true,
  error: " ",
  post: {}
}
let reducer = (state, action) => {
  switch(action.type){
    case 'success':
      return {...state,
      post: action.payload,
    error: ''}
    case 'fail':
      return {
        post: {},
        error: "something went wrong",
        loading: false
      }
    case 'dec':
      return {...state,second_counter: state.second_counter + 10000}
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
      <p>{inc.second_counter}</p>
       <button onClick={() => dispatcher({type:'increment'})}> increase</button>
       
  
      <Main/>
   

       </div>
  );
}

export default App;
