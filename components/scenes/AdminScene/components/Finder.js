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
    clickNode: {},
    structure: {}
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('this.props.nodeInstance', nextProps.nodeInstance.data)
    let structure = this.mapDataToStructure(nextProps.nodeInstance.data.props, nextProps.nodeInstance.data.structure)
    console.log('NewStructure', structure)
    this.setState(() => ({ _node2Show: nextProps.nodeInstance.data, structure }))
  }

  mapDataToStructure = (data, structure) => {
    if (!data || !structure) {return false};
    var newStructure={};
    for (var value in structure){
      newStructure[value]=Object.assign(structure[value],{}) ;
      for (var val in data){
        if (val==value){
          if (!!data[val] && data[val] instanceof Object){
            newStructure[value].value= data[val][newStructure[value].valuekey];
          }else{
            newStructure[value].value= data[val];
          }
        }
      }
    }
    return newStructure;
  }

  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }
  handleOnClickButton = (node) => {
    this.setState(() => ({ clickNode: node, show: true }))
  }
  // handleNewNode = (nodeType) => {
  //   let node = Transformer(null, nodeType)
  //   console.log('nodeOnNewNode', node)
  //   this.setState((prevState) =>
  //     ({ _node2Show: {children: prevState._node2Show.children.push(node), ...prevState._node2Show} }))
  // }
  // handleEditNode = (node) => {
  // }
  // handleDeleteNode = (node) => {
  // }
  render() {
    return (
      <div className="finderContainer">
          <div className="finderContainer__workzone">
            {/*----------TOOLBAR SECTION----------*/}
            <Toolbar
              title={this.state._node2Show.title}
              createOption={this.state._node2Show.createOptions}
              structure={this.state.structure}
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
