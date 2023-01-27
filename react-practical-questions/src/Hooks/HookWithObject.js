import React, { useState } from 'react'

export default function HookWithObject() {
  const [name, setName] = useState({
    fname: "",
    lname: ""
  })

  return (
    <div>
      <form action="">
        Fname : <input type="text" value={name.fname} onChange={(e) => setName({ ...name, fname: e.target.value })} />
        Lname : <input type="text" value={name.lname} onChange={(e) => setName({ ...name, lname: e.target.value })} />
      </form>
      {name.fname}
      <br />
      {name.lname}
    </div>
  )
}
