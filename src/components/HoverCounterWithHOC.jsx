import React, { useState } from 'react'
import HighOrderComponent from './HighOrderComponent'

const HoverCounterWithHOC = (props) => {
   
  return (
    <div>
    <button onMouseOver={props.handleIncrement}>Count {props.count}</button>
    </div>
  )
}

export default HighOrderComponent(HoverCounterWithHOC);