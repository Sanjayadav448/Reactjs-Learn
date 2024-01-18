import { useState } from "react";

function Chai(){

    let [counter,setCounter]=useState(0)

    const addValue=()=>{
        if(counter<20){
            counter=counter+1
        }

        setCounter(counter)
    }

    const subsValue=() =>{
        if(counter>0){
            counter = counter - 1;
        }
        setCounter(counter)
    }


    return(
        <>
        <div >
        <h1 className=""> Counter <span className="bg-green"> {counter}</span></h1>
        <button className="btn btn-success" onClick={addValue}>+</button>
        <button className="btn btn-danger" onClick={subsValue}>-</button>
        </div>
        </>
        )
}



export default Chai;