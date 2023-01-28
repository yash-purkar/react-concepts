import React, { Component, createContext } from 'react'
import { Provider } from './context';
import C from './C';
// export const myContext = createContext();

export default class A extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "rohan",
      rollNo: 21
    }
  }

  handleClick = () => {
    this.setState({
      rollNo: this.state.rollNo + 1
    })
  }

  render() {
    const contextValues = {
      data: this.state,
      handleClick: this.handleClick
    }
    return (
      <div>
        <Provider value={contextValues}>
          <C />
          {/* <B />
          <D /> */}
        </Provider>
      </div>
    )
  }
}
