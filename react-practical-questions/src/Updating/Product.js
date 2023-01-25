import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div><Cart /></div>
    )
  }
}

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      qty: 0
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount")
  }

  updateQty = () => {
    this.setState({ qty: this.state.qty + 1 })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
  }

  render() {
    console.log("render")
    return (

      <>
        <h1>Cart {this.state.qty}</h1>
        <button onClick={this.updateQty}>Click</button>
      </>
    )
  }
}
