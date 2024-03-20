

export const CounterButton = ( {children, buttonHandle} ) => {
  return (
    <>
        <button onClick={ ()=> buttonHandle() } >{children}</button>
    </>
  )
}
