
import { useState, useEffect } from 'react';
import './App.css';
const te = require('tradingeconomics');
te.login(process.env.REACT_APP_API);


function App() {
const [datas, setDatas] = useState([])
let country;
  useEffect(()=>{
    let data = te.getIndicatorData(country = ['mexico']).then(function(data){
      setDatas( data)
    });
   
  }); 
  

  console.log(datas)


  return (
    <div className="App">
     <p>Economic Data</p>
     {datas.map(item => {
       return(
         <p>{item[0].Category}</p>
       )
     })}
    </div>
  );
}

export default App;
