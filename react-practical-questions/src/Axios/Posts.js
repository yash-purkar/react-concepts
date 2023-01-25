import React, { Component } from 'react'
import axios from 'axios';

export default class Posts extends Component {

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => console.log(resp.data.slice(0, 5))) // it takes (0 , n-1)
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>Posts</div>
    )
  }
}
// In ReactJS, Axios is external library that serves to create HTTP requests.
// 1st we install 