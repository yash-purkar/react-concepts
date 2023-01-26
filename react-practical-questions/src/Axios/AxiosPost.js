import React, { Component } from 'react'
import axios from 'axios';

export default class AxiosPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }




  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });
    // heading 
    // {title : e.target.value}
    // {body : e.target.value}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)

    axios.post("https://jsonplaceholder.typicode.com/users", this.state)
      //.then((resp) => console.log(resp.data.slice(0, 5))) // it takes (0 , n-1)
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err))
  }

  render() {
    // const users = this.state.users
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title <input type="text" value={this.state.title} name="title" onChange={(e) => this.handleChange(e)} /> <br />

          Body <input type="text" value={this.state.body} name="body" onChange={(e) => this.handleChange(e)} />
          <br />

          <button>Submit</button>
        </form>
      </div>
    )
  }
}
// In ReactJS, Axios is external library that serves to create HTTP requests.
// 1st we install 