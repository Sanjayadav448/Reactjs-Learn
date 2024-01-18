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
        <h1> Counter {counter}</h1>
        <button onClick={addValue}>+</button>
        <button onClick={subsValue}>-</button>

        </>
        )
}



export default Chai;