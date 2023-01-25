import React, { Component } from 'react';
class CompB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Yash"
    }
    console.log("CompB : Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("CompB : getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("CompB : componentDidMount");
  }

  render() {
    console.log("CompB : render")
    return (
      <></>
    )
  }
}

export default CompB