import React, { useState } from 'react'

const HoverCounterWithoutHOC = () => {
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
     setCount(count+1)
 
     }
  return (
    <div>
    <button onMouseOver={handleIncrement}>Count {count}</button>
    </div>
  )
}

export default HoverCounterWithoutHOC