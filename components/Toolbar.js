import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Toolbar extends Component {
  render() {
    return (
      <div className="finderContainer__workzone-toolbar">
        <div className="finderContainer__workzone-toolbar__title">
          <p>{this.props.title}</p>
        </div>
        <div className="finderContainer__workzone-toolbar__buttons">
          <Button
            color="default"
          >
            Agregar
          </Button>
          <Button
            color="default"
          >
            Informacion Actual
          </Button>
          <Button
            color="default"
          >
            Buy me a coffee
          </Button>
        </div>
      </div>
    )
  }
}
