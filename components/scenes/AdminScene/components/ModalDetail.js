import React, { Component } from 'react'
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter 
} from 'reactstrap'
import { GenericForm } from 'stk-gforms'

export default class ModalDetail extends Component {
  state = {
    form: {},
    showStructure: {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ showStructure: nextProps.structureMapped }))
  }

  onChange = (data) => {
    this.setState(() => ({ form: data }))
  }

  onCreate = () => {
    this.props.onCreate(this.state.form)
    this.setState(() => ({ form: {} }))
  }

  render() {
    return (
      <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Informacion de {this.props.title}</ModalHeader>
        <ModalBody>
          <GenericForm
            readOnly={this.props.readOnly}
            structure={this.state.showStructure}
            host={'http://apipersona.estratek.com'}
            value={this.state.form || undefined}
            onChange={this.onChange || undefined }
          />
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
