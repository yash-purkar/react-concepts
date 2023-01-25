import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      addr: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: " ${this.state.name} "Addr: " ${this.state.addr}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /> <br />

        Addr <input type="text" value={this.state.addr} onChange={(e) => this.setState({ addr: e.target.value })} />
        <br />

        <button>Submit</button>
      </form>
    )
  }
}
export default Form;