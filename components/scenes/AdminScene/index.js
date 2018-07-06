// Core imports
import React from 'react'
import Finder from './components/Finder'
import ModalDetail from './components/ModalDetail'
// Helper functions
import { Transformer, mapDataToStructure, getParentArr } from '../../../utils/transformer'
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
    modalMoveIsOpen: false,
    nodeAux: { data:{} },
    structure2Add: {},
    options: []
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
      console.log('getParArr', getParentArr(nodeInstance))
      return this.setState(() => ({ nodeInstance }))
    } else {
      let nodeInstance = Transformer(nodeID, nodeType);
      await nodeInstance.init();
      await nodeInstance.setData();
      await nodeInstance.setStructure()
      console.log('getParArr', getParentArr(nodeInstance))
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
  // ToggleMoveModal
  toggleMove = async (node) => {
    // console.log('node on Move', node)
    if (node.data) {
      let options = await node.getPossibleParents()
      this.setState((prevState) => ({ options, modalMoveIsOpen: !prevState.modalMoveIsOpen, nodeAux: node }))
    } else {
      this.setState((prevState) => ({ modalMoveIsOpen: !prevState.modalMoveIsOpen }))
    }
    // console.log('node on Move s ---->', s)
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
      nodeInstance: _nodeIn
    }))
  }
  // Handle edit node for finder
  onEdit = async (node) => {
    let x = this.state.nodeInstance.data.children.filter(el => el.data.id === node.form._id)
    x[0].data.props = node.form
    await x[0].save()
    this.setState(() => ({
      modalEditIsOpen: false,
    }))
    console.log('holi')
  }
  // Handle delete node for finder
  onDelete = async (node) => {
    if(window.confirm('¿Deseas eliminar ' + node.data.title + '?')) {
      try{
        await node.delete()
      } catch (e) {
        alert('No se puede eliminar ' + node.data.type)
      }
    } else {
      console.log('Se declino la decision')
    }
  }
  // handler to close the modal
  onClose = () => {
    this.setState(() => ({ modalIsOpen: false }))
  }
  // Handle On Change to move a node
  onChangeMove = (selectedOption) => {
    // console.log('this.node.aux', this.state.nodeAux)
    this.state.nodeAux.move(selectedOption.value)
    // console.log('selectedOption on index', selectedOption)
  }
  // Check implict data to structure
  getImplictData = (type, structure) => {
    console.log('node type', type)
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
        return {
          ...structure,
          plaza: {
            ...structure.plaza,
            disabled: true,
            value: this.state.nodeInstance.data.id
          },
          puesto: {
            ...structure.puesto,
            disabled: true,
            value: this.state.nodeInstance.data.props.puesto
          }
        }
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
        label: 'Mover',
        func: this.toggleMove
      },
      {
        label: 'Editar',
        func: this.toggleEdit
      },
      {
        label: 'Eliminar',
        func: this.onDelete
      },
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
              form
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
              form
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
              form
            />
            {/*---Modal to Move---*/}
            <ModalDetail
              key={4}
              modalOpen={this.state.modalMoveIsOpen}
              options={this.state.options}
              toggle={this.toggleMove}
              onCreate={this.onChangeMove}
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