import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './components/Container'
import Path from './Path'
import Detail from './components/Detail'
import { transformDataTree, getSpecificNode } from '../utils/transformData'
import { withRouter } from 'next/router'
import Router from 'next/router'
import '../styles/_finder.css'
import { Transformer } from '../utils/transformer'

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
    let nodeID = this.props.router.query.node,
    trasformedData = transformDataTree(this.props.data);
    trasformedData = [{ id: 'root', title: 'root', childs: trasformedData }]

    if (nodeID === 'root') {
      console.log('transform', Transformer('5afca6755bd37f19270f33f4','workspace'));
      return this.setState(() => ({ data: trasformedData, _node2Show: trasformedData }))
    } else {
      let myNode = getSpecificNode(trasformedData, nodeID);
      return this.setState(() => ({ data: trasformedData, _node2Show: myNode }))
    }
  }
  
  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }

  handleDoubleClick = (validators) => {
    // console.log('validators', validators)
    const { id } = validators
    this.props.router.push('/admin?node=' + id)
    let myNode = getSpecificNode(this.state.data, id);
    console.log('myNoda', myNode)
    this.setState(() => ({ _node2Show: myNode }))
  }

  handleOnClickButton = (node) => {
    // console.log('node', node)
    this.setState(() => ({ clickNode: node, show: true }))
  }
  
  render() {
    // console.log('_node2Show', this.state._node2Show)
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