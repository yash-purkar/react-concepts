import React from 'react'
const users = [
  {
    id: 1,
    name: "Arjun",
    class: "A",
  },
  {
    id: 2,
    name: "vaibhav",
    class: "B",
  }
]

function Practice() {
  return (
    <div>
      {
        users.map((elem) => {
          return <>
            <h1>{elem.name}</h1>
          </>
        })
      }

      {/* {users[0].name}
      {users[1].name} */}
    </div>
  )
}

export default Practice