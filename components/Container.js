import React, { Component } from 'react'
import Cardy from './Cardy';
import Link from 'next/link'

export default class Container extends Component {
  render() {
    console.log('this.props.nodes', this.props.nodes)
    return (
      <div className="finderContainer__workzone-work">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.props.nodes &&
            this.props.nodes.childs.map((_node, i) => (
              <Link
                key={`cardy_${i}`}
                href={`/admin?node=${_node.id}`}
              >
                <a>
                  <Cardy
                    key={`cardy_${i}`}
                    selectLeaf={this.props.showDetail}
                    onDoubleClick={this.props.handleDoubleClick}
                    node={_node}
                    buttonClick={this.props.handleOnClickButton}
                  >
                    {_node.title}
                  </Cardy>  
                </a>
              </Link>
            ))
          }                        
        </div>
      </div>
    )
  }
}
