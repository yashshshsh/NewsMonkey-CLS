import React, { Component } from 'react'
import loading from './Spinner-1s-200px.gif'

export class spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading"></img>
      </div>
    )
  }
}

export default spinner
