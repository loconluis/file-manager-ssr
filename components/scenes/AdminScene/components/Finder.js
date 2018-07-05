import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './Container'
import Path from './Path'
import Detail from './Detail'
// Helpers
import { mapDataToStructure } from '../../../../utils/transformer'

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
  // Core lifecycle on react
  async componentWillReceiveProps(nextProps) {
    // console.log('this.props.nodeInstance', nextProps.nodeInstance)
    await nextProps.nodeInstance.setStructure()
    // console.log('this.props.nodeInstance 2', nextProps.nodeInstance)
    let structure =  mapDataToStructure(nextProps.nodeInstance.data.props, nextProps.nodeInstance.data.cleanStructure)
    console.log('NewStructure', structure)
    this.setState(() => ({ _node2Show: nextProps.nodeInstance.data, structure }))
  }
  // Handler show Detail
  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }
  // Handle show the sidebar with all the info
  handleOnClickButton = (node) => {
    this.setState(() => ({ clickNode: node, show: true }))
  }
  // Core function to render
  render() {
    return (
      <div className="finderContainer">
          <div className="finderContainer__workzone">
            {/*----------TOOLBAR SECTION----------*/}
            <Toolbar
              title={this.state._node2Show.title}
              createOption={this.state._node2Show.createOptions}
              structure={this.state.structure}
              handleAddNode={this.props.handleAddNode}
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
