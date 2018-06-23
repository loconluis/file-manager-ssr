import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './Container'
import Path from './Path'
import Detail from './Detail'
import { transformDataTree, getSpecificNode } from '../utils/transformData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import '../styles/_finder.css'

class Finder extends Component {
  state = {
    show: false,
    data: [],
    _node2Show: [],
    path: [{
        label: 'admin',
        id: 'root'
      }],
    clickNode: {}
  }

  componentDidMount() {
    console.log('router', this.props.router)
    let nodeID = this.props.router.query.node,
    trasformedData = transformDataTree(this.props.data);
    trasformedData = [{ id: 'root', title: 'root', childs: trasformedData }]
    if (nodeID === 'root') {
      return this.setState(() => ({ data: trasformedData, _node2Show: trasformedData }))
    } else {
      let myNode = getSpecificNode(trasformedData, nodeID);
      return this.setState(() => ({ data: trasformedData, _node2Show: myNode }))
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('im receiving props')
    let nodeID = this.props.router.query.node,
    myNode = getSpecificNode(this.state.data, nodeID);
    console.log('node', myNode)
    this.setState(() => ({ _node2Show: myNode }))
  }
  
  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  handleDoubleClick = (validators) => {
    // let find = this.state._node2Show.filter(el => el.title === validators.label)[0].childs
    // let path = [...this.state.path, validators]
    // Router.push({
    //   pathname: '/admin',
    //   query: { node: validators.id }
    // })
    // this.setState(() => ({ _node2Show: find, path }))
    console.log('was clicked it')
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
            <Toolbar title={'Root'}/>
            <Container 
              nodes={this.state._node2Show[0]}
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

export default withRouter(Finder)