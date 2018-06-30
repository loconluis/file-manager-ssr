import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Container from './Container'
import Path from './Path'
import Detail from './Detail'

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

  // componentDidMount() {
  //   console.log('this.props.nodeInstance', this.props.nodeInstance)
  // }
  
  componentWillReceiveProps(nextProps) {
    console.log('this.props.nodeInstance', nextProps.nodeInstance.data)
    this.setState(() => ({ _node2Show: nextProps.nodeInstance.data }))
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

export default Finder