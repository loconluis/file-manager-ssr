import React, { Component } from 'react'

export default class Path extends Component {
  render() {
    return (
      <div className="finderContainer__workzone-footer">
        <p>{this.props.path.join(' / ')}</p>
      </div>
    )
  }
}
