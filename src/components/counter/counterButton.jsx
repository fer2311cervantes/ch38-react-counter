import { Button } from "@mui/material"


export const CounterButton = ( {children, buttonHandle} ) => {
  return (
    <>
        <Button variant="outlined" onClick={ ()=> buttonHandle() } >{children}</Button>
    </>
  )
}
