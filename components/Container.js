import React, { Component } from 'react'
import Cardy from './Cardy';
// import Link from 'next/link'

export default class Container extends Component {
  render() {
    return (
      <div className="finderContainer__workzone-work">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            this.props.nodes.map((_node, i) => (
              <Cardy
                key={`cardy_${i}`}
                selectLeaf={this.props.showDetail}
                onDoubleClick={this.props.handleDoubleClick}
                node={_node}
                buttonClick={this.props.handleOnClickButton}
              >
                {_node.title}
              </Cardy>  
            ))
          }                        
        </div>
      </div>
    )
  }
}
