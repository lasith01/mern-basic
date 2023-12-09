import React,{useEffect,useState}from 'react';
import './App.css';

function App() {
  const [data,setData]=useState('');

  useEffect(()=>{
    //fetch data from api
    fetch('/api')
      .then((res)=>res.json())
      .then((result)=>setData(result.message))
      .catch((error)=>console.error('Error: ',error));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Example</h1>
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
