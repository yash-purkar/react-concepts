import React, { Component } from 'react'
import HOC from './HOC'

class Student1 extends Component {
  state = {
    marks: 10
  }
  render() {
    return (
      <div>Student 1 {this.state.marks} Sub : {this.props.sub}</div>
    )
  }
}

export default HOC(Student1)