import { CounterButton } from "./counterButton";


export const Counter = () => {
    let counter = 10;
  return (
    <>
        <h2>{ counter }</h2>
        <CounterButton></CounterButton>
        <CounterButton></CounterButton>
        <CounterButton></CounterButton>
    </>
  )
}
