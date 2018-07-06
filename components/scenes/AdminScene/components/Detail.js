import React, { Component } from 'react'
import { GenericForm } from 'stk-gforms'

export default class Detail extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div className="finderContainer__detailContainer">
        <span
          style={{ cursor: 'pointer', fontSize: '20px', paddingLeft: '10px' }}
          onClick={this.props.showDetail}
        >&times;</span>
        <div>
          <GenericForm
            readOnly={true}
            structure={this.props.node}
            host={'http://apipersona.estratek.com'}
          />
        </div>
      </div>
    )
  }
}
