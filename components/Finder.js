import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './Container'
import Path from './Path'
import Detail from './Detail'
import Router from 'next/router'
import '../styles/_finder.css'

export default class Finder extends Component {
  state = {
    show: false,
    _node2Show: [],
    path: ['admin'],
    clickNode: {}
  }

  componentDidMount() {
    // console.log('this.props', this.props)
    this.setState(() => ({ _node2Show: this.props.data }))
    // window.addEventListener('click', () => this.setState({show: false}))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('prevPropos', prevProps)
    console.log('prevState', prevState)
    console.log('this.state', this.state)
    // Router.push(`/${this.state.path.slice(-1)[0]}`)
    // console.log('snapshot', snapshot)
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
    // console.log('Link', Router)
    return (
      <div className="finderContainer">
          <div className="finderContainer__workzone">
            <Toolbar title={this.state.path.slice(-1)[0]}/>
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
