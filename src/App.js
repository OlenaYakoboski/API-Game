import './App.css';
import { useEffect,useState } from 'react';


function App() {
const [fun, setFun]= useState('');



useEffect(() => {
  getAdvice();
  }, [])


  const getAdvice = async()=>{
  const response = await fetch(`http://www.boredapi.com/api/activity/`);
  const data = await response.json();
  setFun(data.activity);

  }
  
return (

  <div className="App">
  
  <p> {fun} </p>
  <button onClick={getAdvice}>New Tip</button>
  
  
  
  </div>
  
  );
  
  }
  
  
  
  
export default App;
