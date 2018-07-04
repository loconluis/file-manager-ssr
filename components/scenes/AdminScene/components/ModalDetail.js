import React, { Component } from 'react'
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter 
} from 'reactstrap'
import { GenericForm } from 'stk-gforms'

export default class ModalDetail extends Component {
  render() {
    console.log('this.props.structyre', this.props.structureMapped)
    return (
      <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Informacion de {this.props.title}</ModalHeader>
        <ModalBody>
          <GenericForm
            readOnly={true}
            structure={this.props.structureMapped}
            // host={config.HOST}
            host={'http://apipersona.estratek.com'}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
