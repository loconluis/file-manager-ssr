// Core imports
import React from 'react'
import Finder from './components/Finder'
import ModalDetail from './components/ModalDetail'
// Helper functions
import { Transformer } from '../../../utils/transformer'
// HOC for router on next
import { withRouter } from 'next/router'
// StyleS
import '../../../styles/_finder.css'
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';

class AreaScene extends React.Component {
  state = {
    nodeInstance: [],
    modalIsOpen: false,
    structure2Add: {}
  }
  // Core function on React
  async componentDidMount() {
    let nodeID = this.props.router.query.node,
    nodeType = this.props.router.query.type,
    wpID = '5b0749205bd37f2dbd0f33f5'

    if (nodeID === wpID) {
      let nodeInstance = Transformer('5b0749205bd37f2dbd0f33f5','workspace');
      await nodeInstance.init();
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.init();
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    }
  }
  // Core function on React
  async componentWillReceiveProps(nextProps) {
    let nodeID = this.props.router.query.node,
    nodeType = this.props.router.query.type,
    wpID = '5b0749205bd37f2dbd0f33f5'
    if (nodeID === wpID) {
      let nodeInstance = Transformer('5b0749205bd37f2dbd0f33f5','workspace');
      await nodeInstance.init();
      await nodeInstance.setData();
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.init();
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
  // ToggleAddModal
  toggleAdd = async (type) => {
    console.log('nodeType', typeof type)
    if (typeof type === 'string') {
      let str = Transformer(null, type)
      await str.setData()
      let _str = this.getImplictData(type, str.data.cleanStructure)
      console.log('_str', _str)
      // this.setState(() => ({  }))
      this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen, structure2Add: {..._str} }))
    } else {
      this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen }))
    }
  }
  // Handle create node for finder
  onCreate = (node) => {
    console.log('im in index create', node.form)
    this.setState(() => ({ modalIsOpen: false }))
  }
  // Handle edit node for finder
  onEdit = (updates, id) => {
  }
  // Handle delete node for finder
  onDelete = (id) => {
  }
  // handler to close the modal
  onClose = () => this.setState(() => ({ modalIsOpen: false }))
  // Check implict data to structure
  getImplictData = (type, structure) => {
    switch (type) {
      case 'area':
        return {
          ...structure,
          empresa: {
            ...structure.empresa,
            disabled: true,
            value: this.state.nodeInstance.data.props.empresa._id
          },
          areapadre: {
            ...structure.areapadre,
            disabled: true,
            value: this.state.nodeInstance.data.id
          }
        }
        break;
      case 'puesto':
        break;
      case 'persona':
        break;
      case 'empresa':
        break;
    }
  }
  // render of finder
  render() {
    console.log('this.state.nodeInstance on Index', this.state.nodeInstance)
    return (
      <div>
        <div id='modal_container'>
        <ModalDetail
          readOnly={false}
          modalOpen={this.state.modalIsOpen}
          structureMapped={this.state.structure2Add}
          toggle={this.toggleAdd}
          onCreate={this.onCreate}
        />
        </div>
        <Finder
          nodeInstance={this.state.nodeInstance}
          handleDoubleClick={this.handleDoubleClick}
          // handleOnClickButton={this.handleOnClickButton}
          handleAddNode={this.toggleAdd}
          showDetail={this.showDetail}
        />
      </div>
    )
  }
}

export default withRouter(AreaScene)