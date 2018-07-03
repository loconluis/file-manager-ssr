// Core imports
import React from 'react'
import Finder from './components/Finder'
import { DynamicModal } from 'stk-gforms'
// Helper functions
import { Transformer } from '../../../utils/transformer'
// HOC for router on next
import { withRouter } from 'next/router'
// StyleS
import '../../../styles/_finder.css'

class AreaScene extends React.Component {
  state = {
    nodeInstance: [],
    modalIsOpen: false,
  }
  async componentDidMount() {
    let nodeID = this.props.router.query.node,
    nodeType = this.props.router.query.type,
    wpID = '5b0749205bd37f2dbd0f33f5'

    if (nodeID === wpID) {
      let nodeInstance = Transformer('5b0749205bd37f2dbd0f33f5','workspace');
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    }
  }
  async componentWillReceiveProps(nextProps) {
    let nodeID = this.props.router.query.node,
    nodeType = this.props.router.query.type,
    wpID = '5b0749205bd37f2dbd0f33f5'
    if (nodeID === wpID) {
      let nodeInstance = Transformer('5b0749205bd37f2dbd0f33f5','workspace');
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    }
  }
  // Handle show details
  showDetail = () => {
    this.setState((prevState) => ({ show: !prevState.show }))
  }
  // handleDoubleClick on node
  handleDoubleClick = async (validators) => {
    const { id, type } = validators
    this.props.router.push('/admin?node=' + id + '&type=' + type)
  }
  // handle double click
  handleOnClickButton = (node) => {
    this.setState(() => ({ clickNode: node, show: true }))
  }
  // Handle the create node 
  onCreate = (node) => {
  }
  // Handler to modify the structure to show on modal
  transformStructure = () => {

  }
  // handler to close the modal
  onClose = () => this.setState(() => ({ modalIsOpen: false }))
  // render of finder
  render() {
    return (
      <div>
        <div id='modal_container'>
          <DynamicModal
            onClose={this.onClose}
            title="Nueva Area"
            host={'http://apipersona.estratek.com/organization/empresa'}
            microservice={'organization'}
            model="area"
            onSave={this.onCreate}
            transformStructure={this.transformStructure}
            isOpen={this.state.modalIsOpen}
          />
        </div>
        <Finder
          nodeInstance={this.state.nodeInstance}
          handleDoubleClick={this.handleDoubleClick}
          handleOnClickButton={this.handleOnClickButton}
          showDetail={this.showDetail}
        />
      </div>
    )
  }
}

export default withRouter(AreaScene)