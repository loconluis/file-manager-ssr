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
    nodeInstance: {},
    modalAddIsOpen: false,
    modalViewIsOpen: false,
    nodoAux: { data:{} },
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
      await nodeInstance.setStructure()
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.init();
      await nodeInstance.setData();
      await nodeInstance.setStructure()
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
      await nodeInstance.setStructure()
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.init();
      await nodeInstance.setData();
      await nodeInstance.setStructure()
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
    if (typeof type === 'string') {
      const str = Transformer(null, type)
      await str.init()
      await str.setStructure()
      str.data.cleanStructure = this.getImplictData(type, str.data.cleanStructure)
      return this.setState((prevState) => ({modalAddIsOpen: !prevState.modalAddIsOpen, nodoAux: str }))
    } else {
      return this.setState((prevState) => ({modalAddIsOpen: !prevState.modalAddIsOpen }))
    }
  }
  // ToggleViewModal
  toggleView =  () => {
    this.setState((prevState) => ({ modalViewIsOpen: !prevState.modalViewIsOpen }))
  }
  // Handle create node for finder
  onCreate = (node) => {
    this.setState(() => ({modalAddIsOpen: false }))
    this.state.nodoAux.data.props = node.form;
    console.log('node', node)
    console.log('node', this.state.nodoAux)
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
    console.log('structure on getImplictData', structure)
    switch (type) {
      case 'area':
        return {
          ...structure,
          empresa: {
            ...structure.empresa,
            disabled: true,
            value: this.state.nodeInstance.data.type !== 'empresa' ? this.state.nodeInstance.data.props.empresa._id : this.state.nodeInstance.data.id
          },
          areapadre: {
            ...structure.areapadre,
            disabled: true,
            value: this.state.nodeInstance.data.type === 'empresa' ?  undefined : this.state.nodeInstance.data.id
          }
        }
        break;
      case 'puesto':
        return {
          ...structure,
          area: {
            ...structure.area,
            disabled: true,
            value: this.state.nodeInstance.data.id
          },
          empresa: {
            ...structure.empresa,
            disabled: true,
            value: this.state.nodeInstance.data.props.empresa._id
          }
        }
        break;
      case 'persona':
        return structure
        break;
      case 'empresa':
        return structure
        break;
    }
  }
  // render of finder
  render() {
    return (
      <div>
        {this.state.nodeInstance.data && 
          <div id='modal_container'>
            <ModalDetail
              key={1}
              readOnly={true}
              title={this.state.nodeInstance.data.title}
              modalOpen={this.state.modalViewIsOpen}
              structureMapped={this.state.nodeInstance.data.cleanStructure}
              toggle={this.toggleView}
            />
            <ModalDetail
              key={2}
              readOnly={false}
              title={this.state.nodeInstance.data.title}
              modalOpen={this.state.modalAddIsOpen}
              structureMapped={this.state.nodoAux.data.cleanStructure}
              toggle={this.toggleAdd}
              onCreate={this.onCreate}
            />
          </div>}
        <Finder
          nodeInstance={this.state.nodeInstance}
          handleDoubleClick={this.handleDoubleClick}
          // handleOnClickButton={this.handleOnClickButton}
          handleAddNode={this.toggleAdd}
          handleViewNode={this.toggleView}
          showDetail={this.showDetail}
        />
      </div>
    )
  }
}

export default withRouter(AreaScene)