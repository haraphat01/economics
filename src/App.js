
// import {useEffect, React, useReducer } from 'react';
// import axios from 'axios';
import './App.css';
import Main from './Main';
import { useDispatch, useSelector } from 'react-redux';




function App() {
  let counter = useSelector((state) => state.counter)
  let dispatch = useDispatch()
  function inc(){
    dispatch({type: "INC"})
  }
  function dec(){
    dispatch({type: "DEC"})
  }
  
  return (
    <div className="App">
      
      <Main/>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={inc}> inc</button>
      <button onClick={dec}>dec</button>
   

       </div>
  );
}

export default App;
