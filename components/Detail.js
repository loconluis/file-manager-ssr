import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div className="finderContainer__detailContainer">
        <span
          style={{ cursor: 'pointer', fontSize: '20px', paddingLeft: '10px' }}
          onClick={this.props.showDetail}
        >&times;</span>
        <div>
          {JSON.stringify(this.props.node, undefined, 2)}
        </div>
      </div>
    )
  }
}
