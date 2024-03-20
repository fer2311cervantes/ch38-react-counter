import { useState } from "react";
import { CounterButton } from "./counterButton";


export const Counter = () => {
    let counter = 10;
    const [ counterValue, setCounter ] = useState(10);

    const incrementHandle = () =>{
        setCounter(counterValue + 1);
      }
    
      const decrementHandle = () =>{
        setCounter(counterValue - 1);
      }
    
      const resetHandle = () =>{
        setCounter(10);
      }

  return (
    <>
        <h2>{counterValue}</h2>
        <CounterButton buttonHandle = {decrementHandle} >-</CounterButton>
        <CounterButton buttonHandle = {resetHandle} >Reset</CounterButton>
        <CounterButton buttonHandle = {incrementHandle} >+</CounterButton>
    </>
  )
}
