import React from 'react'
type GreetPropsType = {
    name?: string,
}
function Greet(props: GreetPropsType) {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet