import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './Container'
import Path from './Path'
import Detail from './Detail'
import { transformDataTree } from '../utils/transformData'
import '../styles/_finder.css'

export default class Finder extends Component {
  state = {
    show: false,
    data: [],
    _node2Show: [],
    path: ['admin'],
    clickNode: {}
  }

  componentDidMount() {
    // [{ name: 'admin', id: 'root' }]
    console.log('this.props', this.props.data)
    let trasformedData = transformDataTree(this.props.data)
    console.log('trasformedData', trasformedData)
    this.setState(() => ({ data: trasformedData, _node2Show: trasformedData }))
    // window.addEventListener('click', () => this.setState({show: false}))
  }

  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  handleDoubleClick = (validators) => {
    let find = this.state._node2Show.filter(el => el.title === validators.label)[0].childs
    let path = [...this.state.path, validators]
    this.setState(() => ({ _node2Show: find, path }))
  }

  handleOnClickButton = (node) => {
    console.log('node', node)
    this.setState(() => ({ clickNode: node, show: true }))
  }
  
  render() {
    console.log('_node2Show', this.state._node2Show)
    return (
      <div className="finderContainer">
          <div className="finderContainer__workzone">
            <Toolbar title={this.state.path.slice(-1)[0].label}/>
            <Container 
              nodes={this.state._node2Show}
              showDetail={this.showDetail}
              handleDoubleClick={this.handleDoubleClick}
              handleOnClickButton={this.handleOnClickButton}
            />
            <Path path={this.state.path}/>
          </div>
          {this.state.show && 
            <Detail
              node={this.state.clickNode}
              showDetail={this.showDetail}
            />}
      </div>
    )
  }
}
