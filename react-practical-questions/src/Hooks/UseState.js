import React, { useState } from 'react'

export default function UseState() {
  const [counter, setCounter] = useState(0);

  const channelName = useState("Technical suneja");
  const name = channelName[0];
  console.log(channelName);
  const setName = channelName[1];



  function decre() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  function updateName() {
    setName("Yash");

  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={decre}>-</button>
      <h1>{name}</h1>
      <button onClick={updateName}>Update</button>

    </div>
  )
}
