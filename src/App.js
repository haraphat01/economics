
import { useState, useEffect } from 'react';
import './App.css';





function App() {
  let [name, setName] = useState({
    firstName: " ",
    lastName: " "
  })

  function on(e){
    e.preventDefault()
    setName(
      {
        ...name,
        firstName: e.target.value,
        lastName: e.target.value.lastName
      }
    )
  }
  
  return (
    <div className="App">
      <form>
        <input type="text" value={name.firstName} onChange={on}/>
        <input type="text" value={name.lastName} onChange={on}/>
      </form>
    
        <p>{name.firstName}</p>
        <p>{name.lastName}</p>
       </div>
  );
}

export default App;
