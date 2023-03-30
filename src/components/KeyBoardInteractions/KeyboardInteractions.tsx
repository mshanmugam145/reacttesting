import React, { useState } from 'react'

function KeyboardInteractions() {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
        <button onClick={() => setCount(amount)}>set</button>
    </div>
  )
}

export default KeyboardInteractions