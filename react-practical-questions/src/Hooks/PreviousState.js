import React from 'react'

export default function PreviousState() {
  const [count, setCount] = React.useState(1);
  const [pre, setPre] = React.useState()

  function updateCount() {
    let randomVal = Math.floor(Math.random() * 100)

    setCount(prev => {
      console.log(prev
      )
      setPre(prev)
      return randomVal;
    });
  }

  return (
    <div><h1>Current : {count}</h1>
      <h1>Previos : {pre}</h1>
      <button onClick={updateCount}>+</button>
    </div>
  )
}
