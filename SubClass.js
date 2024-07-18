import React, { Component } from 'react'

export default class SubClass extends Component {
  render() {
    return (
      <div>
        {this.props.Fullname}
      </div>
    )
  }
}
