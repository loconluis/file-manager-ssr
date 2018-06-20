import React, { Component } from 'react'

export default class Cardy extends Component {
  handleDoubleClick = () => {
    this.props.onDoubleClick(this.props.children)
  }

  self = () => {
    console.log('Self is called')
    this.props.buttonClick(this.props.node)
  }

  render() {
    return (
      <div>
        <div className="cardy"
          onDoubleClick={this.handleDoubleClick}
          // onClick={props.selectLeaf}
        >
          {/*this.props.children*/}
          <button
            onClick={this.self}
          >
            Ver Detalle
          </button>
        </div>
        <div className="cardy__label">
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }
}


  
