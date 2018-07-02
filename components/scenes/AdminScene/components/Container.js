import React, { Component } from 'react'
import Cardy from './Cardy'

export default class Container extends React.Component {

  getCardByType = (_node, props, i)  => {
    console.log('nodetype', _node.data.type)
    console.log('props', props)
    switch(_node.data.type) {
      case 'workspace':
        return (
          <a key={`cardy_${i}`}>
            <Cardy
              selectLeaf={props.showDetail}
              onDoubleClick={props.handleDoubleClick}
              node={_node}
              buttonClick={props.handleOnClickButton}
            >
              {_node.data.title}
            </Cardy>  
          </a>
        )
        break;
      case 'empresa':
        return (
          <a key={`cardy_${i}`}>
            <Cardy
              selectLeaf={props.showDetail}
              onDoubleClick={props.handleDoubleClick}
              node={_node}
              buttonClick={props.handleOnClickButton}
            >
              {_node.data.title}
            </Cardy>  
          </a>
        )
        break;
      case 'area':
      return (
          <a key={`cardy_${i}`}>
            <Cardy
              selectLeaf={props.showDetail}
              onDoubleClick={props.handleDoubleClick}
              node={_node}
              buttonClick={props.handleOnClickButton}
            >
              {_node.data.title}
            </Cardy>  
          </a>
        )
        break;
      case 'puesto':
      return (
        <a key={`cardy_${i}`}>
          <Cardy
            selectLeaf={props.showDetail}
            onDoubleClick={props.handleDoubleClick}
            node={_node}
            buttonClick={props.handleOnClickButton}
          >
            {_node.data.title}
          </Cardy>  
        </a>
        )
        break;
      case 'persona':
      return (
        <a key={`cardy_${i}`}>
          <Cardy
            selectLeaf={props.showDetail}
            node={_node}
            buttonClick={props.handleOnClickButton}
          >
            {_node.data.title}
          </Cardy>  
        </a>
        )
        break;
    }
  }
  render () {
    console.log('this.props', this.props)
    return (
      <div className="finderContainer__workzone-work">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.props.nodes.children.map((_node, i) => this.getCardByType(_node, this.props, i))}
        </div>
      </div>
    )
  }
}


// <a key={`cardy_${i}`}>
//             <Cardy
//               selectLeaf={showDetail}
//               onDoubleClick={handleDoubleClick}
//               node={_node}
//               buttonClick={handleOnClickButton}
//             >
//               {_node.data.title}
//             </Cardy>  
//           </a>