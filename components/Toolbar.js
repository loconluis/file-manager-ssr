import React, { Component } from 'react'

export default class Toolbar extends Component {
  render() {
    return (
      <div className="finderContainer__workzone-toolbar">
        <div className="finderContainer__workzone-toolbar__title">
          <p>{this.props.title}</p>
        </div>
        <div className="finderContainer__workzone-toolbar__buttons">
          <button>
            Agregar
          </button>
          <button>
            Informacion Actual
          </button>
          <button>
            Buy me a coffee
          </button>
        </div>
      </div>
    )
  }
}
