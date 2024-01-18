import { useState } from 'react';
import './App.css';

function App() {


 const [color,setColor] =useState("chocolate")




  return (
    <div className="" style={{backgroundColor:color,height:"100vh"}}>
    <div className='fixed-bottom d-flex justify-content-center  p-2 mb-4 rounded'>
      <div className='p-2 px-4 rounded-pill' style={{backgroundColor:"white"}}>
      <button className='bg-red rounded btn btn-danger ms-2 gap-3' onClick={()=> setColor("Red")} >Red</button>
      <button className='bg-red rounded btn text-white ms-2 gap-3' onClick={()=>setColor("Yellow")} style={{backgroundColor:"Yellow"}}  >Yellow</button>
      <button className='bg-red rounded btn text-white ms-2 gap-3' onClick={()=>setColor("Purple")} style={{backgroundColor:"Purple"}}>Purple</button>
      <button className='bg-red rounded btn text-white ms-2 gap-3' onClick={()=>setColor("Green")} style={{backgroundColor:"Green"}}>Green</button>
      <button className='bg-red rounded btn text-white ms-2 gap-3' onClick={()=>setColor("Pink")} style={{backgroundColor:"Pink"}}>Pink</button>
        
        </div>
        </div>
        </div>
  );
}

export default App;
