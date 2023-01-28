import React, { Component } from 'react'

export default class Updating extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      count: 0
    }
  }
  // 0  1
  //fadfsadf 1 1
  componentDidUpdate(prevProps, prevState) {
    // console.log("Previous ", prevState.count);
    // console.log("current ", this.state.count);
    if (prevState.count !== this.state.count) {
      console.log("update");
    }
    else {
      console.log("condition false")
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <br />
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </div>
    )
  }
}

/**
 useEffect(()=>{

 },[count]);
 */