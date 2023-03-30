import React from 'react'
import { CounterTwoProps } from './counter-two.types'

function Countertwo(props: CounterTwoProps) {
  return (
    <div>
        <h1>Counter Two</h1>
        <p>{props.count}</p>
        {props.handleInc && (
            <button onClick={props.handleInc}>Increment</button>
        )}
        {props.handleDec && (
            <button onClick={props.handleDec}>Decrement</button>
        )}
    </div>
  )
}

export default Countertwo