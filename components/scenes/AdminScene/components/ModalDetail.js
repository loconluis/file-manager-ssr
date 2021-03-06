import React, { Component } from 'react'
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter 
} from 'reactstrap'
import { GenericForm } from 'stk-gforms'
import Select from 'react-select'

export default class ModalDetail extends Component {
  state = {
    form: {},
    showStructure: {},
    selectedOption: {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ showStructure: nextProps.structureMapped }))
  }

  onChange = (data) => {
    this.setState(() => ({ form: data }))
  }

  onCreate = () => {
    if (this.props.form) {
      this.props.onCreate(this.state.form)
      this.setState(() => ({ form: {} }))
    } else {
      this.props.onCreate(this.state.selectedOption)
    }
  }

  onChangeSelect = (selectedOption) => {
    console.log('selectedOption', selectedOption)
    this.setState(() => ({ selectedOption }))
    // this.props.onChange(selectedOption)
  }

  render() {
    console.log('strucutre on MODAL', this.state.showStructure)
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;

    return (
      <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Informacion de {this.props.title}</ModalHeader>
        <ModalBody>
          {this.props.form ? <GenericForm
            readOnly={this.props.readOnly}
            structure={this.state.showStructure}
            host={'http://apipersona.estratek.com'}
            value={this.state.form || undefined}
            onChange={this.onChange || undefined }
          /> :
          <Select
            name="form-field-name"
            value={value}
            onChange={this.onChangeSelect}
            options={this.props.options}
          /> }
        </ModalBody>
        <ModalFooter>
          {
            this.props.readOnly ? '' : <Button color="primary" onClick={this.onCreate}>Agregar</Button>
          }
          <Button color="secondary" onClick={this.props.toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
