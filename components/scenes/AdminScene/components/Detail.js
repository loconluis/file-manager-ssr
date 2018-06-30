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
          {/*JSON.stringify(this.props.node, undefined, 2)*/}
          <p>{'Nombre: ' + this.props.node.label}</p>
          <p>{'Tipo: '+ this.props.node.tipoarea.label}</p>
          <p>{'Empresa:' + this.props.node.empresa.label}</p>
          <p>{'Centro de costo:' + this.props.node.centrodecosto.label}</p>
          <p>{'Hijos: ' + this.props.node.children.length}</p>
        </div>
      </div>
    )
  }
}
