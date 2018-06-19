import React, { Component } from 'react'
import Cardy from './Cardy'
import '../styles/_finder.css'

export default class Finder extends Component {
  state = {
    show: false,
    _node2Show: [],
    path: ['Root'],
    clickNode: {}
  }

  componentDidMount() {
    // console.log('this.props', this.props)
    this.setState(() => ({ _node2Show: this.props.data }))
    // window.addEventListener('click', () => this.setState({show: false}))
  }

  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  handleDoubleClick = (label) => {
    // console.log('label', label)
    let find = this.state._node2Show.filter(el => el.label === label)[0].children
    // this.setState(() => ({ _node2Show: [] }))
    // console.log('find', find)
    let path = [...this.state.path, label]
    this.setState(() => ({ _node2Show: find, path }))
  }

  handleOnClickButton = (node) => {
    console.log('node', node)
    this.setState(() => ({ clickNode: node, show: true }))
  }
  
  render() {
    return (
      <div className="finderContainer">
          <div className="finderContainer__workzone">
            <div className="finderContainer__workzone-title">
              <p>{this.state.path.join(' / ')}</p>
            </div>
            <div className="finderContainer__workzone-work">
              <div style={{ display: 'flex' }}>
                {
                  this.state._node2Show.map((_node, i) => (
                    <Cardy
                      key={`cardy_${i}`}
                      selectLeaf={this.showDetail}
                      onDoubleClick={this.handleDoubleClick}
                      node={_node}
                      buttonClick={this.handleOnClickButton}
                    >
                      {_node.label}
                    </Cardy>  
                  ))
                }                        
              </div>
            </div>
          </div>
          {this.state.show && <div className="finderContainer__detailContainer">
            <span
              style={{ cursor: 'pointer', fontSize: '20px', paddingLeft: '10px' }}
              onClick={this.showDetail}
            >&times;</span>
            <div>
              {JSON.stringify(this.state.clickNode, undefined, 2)}
            </div>
          </div>}
      </div>
    )
  }
}
