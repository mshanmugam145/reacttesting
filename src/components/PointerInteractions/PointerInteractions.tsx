import React, { useState } from 'react'

function PointerInteractions() {
    const [count, setCount] = useState(0)
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
    </div>
  )
}

export default PointerInteractions