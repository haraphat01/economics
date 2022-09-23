
import { useState, useEffect } from 'react';
import './App.css';





function App() {

  const [number, setNumber] = useState(0)
  let init = 0;
  function inc() {
       setNumber(prev => prev + 1 )
  }

  function dec() {
    if (number === 0) {
      return 0
    }
    setNumber(prev => prev - 1 )
}

function ze() {
  setNumber(init)
}

useEffect(
  () =>{
    document.title = `fuck you ${number}`
  }
)
  return (
    <div className="App">
     
    
      <p>{number}</p>
       <button onClick={inc}> increase</button>
       <button onClick={dec}> Decrease</button>
       <button onClick={ze}> Zero</button>
       </div>
  );
}

export default App;
