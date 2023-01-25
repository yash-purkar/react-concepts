import React, { Component } from 'react';
import "./styles.css"

class PracticeC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, name: "brian", class: "A" },
        { id: 2, name: "max", class: "B" },
        { id: 2, name: "max", class: "B" }
      ],
      cls: "demo1",
      isValue: this.props.isValue
    }
  }

  click = () => {
    // console.log(this.state.isValue);
    this.state.isValue ? this.setState({ cls: "demo1", isValue: false }) : this.setState({ cls: "demo", isValue: true })
  }

  render() {
    // let cls = this.props.isValue ? "demo" : "demo1"
    return (
      <div className='div'>
        {
          this.state.users.map((elem, i) => {
            return <h1 key={i} className={this.state.cls}>{elem.name}</h1>
          })
        }

        <h1 className={this.state.cls}>DEMO</h1>

        <button onClick={this.click}>Click me</button>
      </div>

    )
  }
}


export default PracticeC;