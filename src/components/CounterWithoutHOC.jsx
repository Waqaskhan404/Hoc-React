import React, { useState } from 'react'

const CounterWithoutHOC = () => {
    const [count,setCount]=useState(0)

   const handleIncrement=()=>{
    setCount(count+1)

    }
  return (
    <>
    <button onClick={handleIncrement}>Count {count}</button>
    </>
  )
}

export default CounterWithoutHOC