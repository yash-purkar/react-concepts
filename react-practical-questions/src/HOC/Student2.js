import React, { Component } from 'react'
import HOC from './HOC'

class Student2 extends Component {
  state = {
    marks: 20
  }
  render() {
    return (
      <div>Student 2 {this.state.marks} Sub : {this.props.sub}</div>
    )
  }
}

export default HOC(Student2)