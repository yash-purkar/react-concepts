import React from 'react'

export default function UseEffect() {
  const [counter, setCounter] = React.useState(0);
  const [counter1, setCounter1] = React.useState(0);

  React.useEffect(() => {
    console.log("Called")
  }, [counter1]);
  //Initially it behaves like componentDidMount and after updating the state it behaves like componentDidUpdate.

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>{counter1}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
    </div>
  )
}
