import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  const [data, setData] = useState({longitude:'',
elevation:''})

  useEffect(()=>{
     fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
     .then(response=>response.json())
     .then(res=>setData(res));

  },[])
  return (
    <div className="App">
              {/* <h2>{data.elevation}</h2> */}
              <Menu/>
    </div>
  );
}

export default App;
