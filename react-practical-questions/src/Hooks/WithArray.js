import React, { useState } from 'react'

export default function WithArray() {
  const [number, setNumber] = useState([])

  const getNumber = () => {
    let randomNum = Math.floor(Math.random() * 50)
    setNumber([...number, {
      id: number.length,
      value: randomNum
    }]);
  }
  return (
    <div>

      <button onClick={getNumber}>Get number</button>
      <ul>

        {number.map((elem) => {
          return <li key={elem.id}>{elem.value}</li>
        })}
      </ul>
    </div>
  )
}
