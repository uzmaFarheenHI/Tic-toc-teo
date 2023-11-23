import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const[lightUp,setLightUp]=useState([]);
  const element=[[0,1,2],[3,4,5],[6,7,8]]
const handleClick=(idx)=>{
    let array=[...lightUp,idx];
    setLightUp(array);
}

useEffect(()=>{
 if(lightUp.length===9)
  {
    // let i=0;
   setInterval(()=>{
      lightUp.splice(0,1);// first se last se just pop and with splice se we can do
      setLightUp([...lightUp]);// pop is very importantly important jab kuch bhi nahi hpga 
    },200)
  }

},[lightUp])

  return (
    <div className="container">
      <h1 style={{fontSize:'3rem' }} >This is My Tic Toc Teo App </h1>
    <div className="tic-toc-container">
     { element.map((ele,ind)=>{
       return <div className="first-container" key={ind}>
       { ele.map((box,index)=>{
        // if(box==1)
        return <div key={box} className={lightUp.includes(box)===true?"box boxBackground":"box"} onClick={()=>{handleClick(box)}}></div>
       })
       }
     </div>
      })}
     </div>
    </div>
  );
}

export default App;
