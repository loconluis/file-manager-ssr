// Core imports
import React from 'react'
import Finder from './components/Finder'
import ModalDetail from './components/ModalDetail'
// Helper functions
import { Transformer, mapDataToStructure } from '../../../utils/transformer'
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
    modalEditIsOpen: false,
    modalViewIsOpen: false,
    nodeAux: { data:{} },
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
  // Handle Detail of node
  showNode = (node) => {
    console.log('node of showing', node)
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
      return this.setState((prevState) => ({modalAddIsOpen: !prevState.modalAddIsOpen, nodeAux: str }))
    } else {
      return this.setState((prevState) => ({modalAddIsOpen: !prevState.modalAddIsOpen }))
    }
  }
  // ToggleEditModal
  toggleEdit = async (node) => {
    console.log('toggleEdit', node)
    if (node.data) {
      await node.setStructure()
      node.data.cleanStructure = mapDataToStructure(node.data.props, node.data.cleanStructure)
      this.setState((prevState) => ({ modalEditIsOpen: !prevState.modalEditIsOpen, nodeAux: node }))
    } else {
      this.setState((prevState) => ({ modalEditIsOpen: !prevState.modalEditIsOpen }))
    }
  }
  // ToggleViewModal
  toggleView =  () => {
    this.setState((prevState) => ({ modalViewIsOpen: !prevState.modalViewIsOpen }))
  }
  // Handle create node for finder
  onCreate = async (node) => {
    this.state.nodeAux.data.props = node.form;
    console.log('node', node)
    console.log('node', this.state.nodeAux)
    await this.state.nodeAux.create()
    let _nodeIn = this.state.nodeInstance
    _nodeIn.data.children = [..._nodeIn.data.children, this.state.nodeAux]
    this.setState(() => ({ 
      modalAddIsOpen: false,
      _nodeIn
    }))
  }
  // Handle edit node for finder
  onEdit = (node) => {
    console.log('node editted', node)
    this.state.nodeAux.data.props = node.form
    this.state.nodeAux.save()
  }
  // Handle delete node for finder
  onDelete = (id) => {
  }
  // handler to close the modal
  onClose = () => {
    this.setState(() => ({ modalIsOpen: false }))
  }
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
    let cardOption = [
      {
        label: 'Detalle',
        func: this.showNode
      },
      {
        label: 'Editar',
        func: this.toggleEdit
      }
    ]
    return (
      <div>
        {this.state.nodeInstance.data && 
          <div id='modal_container'>
            {/*View Modal Info*/}
            <ModalDetail
              key={1}
              readOnly={true}
              title={this.state.nodeInstance.data.title}
              modalOpen={this.state.modalViewIsOpen}
              structureMapped={this.state.nodeInstance.data.cleanStructure}
              toggle={this.toggleView}
            />
            {/*Add Modal info*/}
            <ModalDetail
              key={2}
              readOnly={false}
              title={this.state.nodeInstance.data.title}
              modalOpen={this.state.modalAddIsOpen}
              structureMapped={this.state.nodeAux.data.cleanStructure}
              toggle={this.toggleAdd}
              onCreate={this.onCreate}
            />
            {/*Edit Modal info*/}
            <ModalDetail
              key={3}
              readOnly={false}
              title={this.state.nodeInstance.data.title}
              modalOpen={this.state.modalEditIsOpen}
              structureMapped={this.state.nodeAux.data.cleanStructure}
              toggle={this.toggleEdit}
              onCreate={this.onEdit}
            />
          </div>}
        <Finder
          nodeInstance={this.state.nodeInstance}
          handleDoubleClick={this.handleDoubleClick}
          // handleOnClickButton={this.handleOnClickButton}
          handleAddNode={this.toggleAdd}
          handleViewNode={this.toggleView}
          showDetail={this.showDetail}
          cardyOption={cardOption}
        />
      </div>
    )
  }
}

export default withRouter(AreaScene)