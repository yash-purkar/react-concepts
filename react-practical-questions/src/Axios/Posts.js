import React, { Component } from 'react'
import axios from 'axios';

export default class Posts extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      //.then((resp) => console.log(resp.data.slice(0, 5))) // it takes (0 , n-1)
      .then((resp) => this.setState({ users: resp.data }))
      .catch((err) => console.log(err))
  }

  render() {
    const { users } = this.state;
    console.log(users)
    // const users = this.state.users
    return (
      <div>
        {
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <small>{user.email}</small>
                <hr />
              </div>
            )
          })
        }
      </div>
    )
  }
}
// In ReactJS, Axios is external library that serves to create HTTP requests.
// 1st we install 