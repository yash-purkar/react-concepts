import React from 'react'

function HOC(STUDENT) {
  class Subject extends React.Component {
    render() {
      return <STUDENT sub="python" />
    }
  }
  return Subject;
}

export default HOC;


// HOC - A higher order component is an advanced technique in React for reusing component logic.
// A HOC is an function that takes a component and returns the a new component.