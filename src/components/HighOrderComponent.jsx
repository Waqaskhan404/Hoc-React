import React, { useState } from 'react'

const HighOrderComponent = (OrignalComponent) => {

    const EnhanceComponent=()=>{
        const [count,setCount]=useState(0)

        const handleIncrement=()=>{
         setCount(count+1)
     
         }

        return <OrignalComponent count={count} handleIncrement={handleIncrement}/>
    }
    


  return  EnhanceComponent
  
}

export default HighOrderComponent