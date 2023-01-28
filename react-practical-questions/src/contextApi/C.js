import React, { Component } from 'react';
import { Consumer } from './context';

export default class C extends Component {

  render() {
    return (
      <Consumer>
        {
          ({ data, handleClick }) => <div><h1>{data.name} {data.rollNo}</h1>
            <button onClick={handleClick}>+</button>
          </div>
        }
      </Consumer>
    )
  }
}
