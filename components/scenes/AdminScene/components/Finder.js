import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './Container'
import Path from './Path'
import Detail from './Detail'
// Helpers
import { Transformer } from '../../../../utils/transformer'

class Finder extends Component {
  state = {
    show: false,
    data: [],
    _node2Show: {children: []},
    path: [{
        label: 'admin',
        id: 'root'
      }],
    clickNode: {}
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('this.props.nodeInstance', nextProps.nodeInstance.data)
    this.setState(() => ({ _node2Show: nextProps.nodeInstance.data }))
  }
  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }
  handleOnClickButton = (node) => {
    this.setState(() => ({ clickNode: node, show: true }))
  }
  handleNewNode = (nodeType) => {
    let node = Transformer(null, nodeType)
    console.log('nodeOnNewNode', node)
    this.setState((prevState) =>
      ({ _node2Show: {children: prevState._node2Show.children.push(node), ...prevState._node2Show} }))
  }
  handleEditNode = (node) => {
  }
  handleDeleteNode = (node) => {
  }
  render() {
    return (
      <div className="finderContainer">
          <div className="finderContainer__workzone">
            {/*----------TOOLBAR SECTION----------*/}
            <Toolbar
              title={this.state._node2Show.title}
              createOption={this.state._node2Show.createOptions}
              handleNewNode={this.handleNewNode}
            />
            {/*----------CONTAINER SECTION----------*/}
            <Container 
              nodes={this.state._node2Show}
              showDetail={this.showDetail}
              handleDoubleClick={this.props.handleDoubleClick}
              handleOnClickButton={this.handleOnClickButton}
            />
            {/*----------PATH SECTION----------*/}
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

export default Finder
