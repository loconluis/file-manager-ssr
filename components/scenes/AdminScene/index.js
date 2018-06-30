// Core imports
import React from 'react'
import Finder from './components/Finder'
// Helper functions
import { Transformer } from '../../../utils/transformer'
// HOC for router on next
import { withRouter } from 'next/router'
// StyleS
import '../../../styles/_finder.css'

class AreaScene extends React.Component {
  state = {
    nodeInstance: []
  }
  async componentDidMount() {
    let nodeID = this.props.router.query.node,
    nodeType = this.props.router.query.type,
    wpID = '5b0749205bd37f2dbd0f33f5'

    if (nodeID === wpID) {
      let nodeInstance = Transformer('5b0749205bd37f2dbd0f33f5','workspace');
      console.log("nodeInstance",nodeInstance);
      await nodeInstance.setData();
      console.log("nodeInstance after setdata",nodeInstance);
      console.log('transform on if', nodeInstance);
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.setData();
      console.log('transform on else', nodeInstance);
      return this.setState(() => ({ nodeInstance }))
    }
  }


  // Handle show details
  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }
  // handleDoubleClick on node
  handleDoubleClick = (validators) => {
    // console.log('validators', validators)
    const { id } = validators
    this.props.router.push('/admin?node=' + id)
    let myNode = getSpecificNode(this.state.data, id);
    console.log('myNoda', myNode)
    this.setState(() => ({ _node2Show: myNode }))
  }
  // handle double click
  handleOnClickButton = (node) => {
    // console.log('node', node)
    this.setState(() => ({ clickNode: node, show: true }))
  }
  // render of finder
  render() {
    return (
      <Finder
        nodeInstance={this.state.nodeInstance}
        handleDoubleClick={this.handleDoubleClick}
        handleOnClickButton={this.handleOnClickButton}
        showDetail={this.showDetail}
      />
    )
  }
}

export default withRouter(AreaScene)