import React, { Component } from 'react'
import ModalDetail from './ModalDetail'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap'
import axios from 'axios'

export default class Toolbar extends Component {
  state = {
    dropdownOpen: false,
    modalOpen: false,
  }

  // Toggle handler for DropDownList
  toggleDrop = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }))
  }
  // Toggle handler for modal
  toggleModal = () => {
    this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }))
  }
  // mapData
  mapToDataCreated = (data, structure) => {
    if (!data || !structure) {return false};
    var newStructure={};
    for (var value in structure){
      newStructure[value]=Object.assign(structure[value],{}) ;
      for (var val in data){
        if (val==value){
          if (!!data[val] && data[val] instanceof Object){
            newStructure[value].value= data[val][newStructure[value].valuekey];
          }else{
            newStructure[value].value= data[val];
          }
        }
      }
    }
    return newStructure;
  }

  render() {
    return (
      <div className="finderContainer__workzone-toolbar">
        <div className="finderContainer__workzone-toolbar__title">
          <p>{this.props.title && this.props.title.toUpperCase() || ''}</p>
        </div>
        <div className="finderContainer__workzone-toolbar__buttons">
        {(this.props.createOption && this.props.createOption.length > 0) && 
          <ButtonDropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggleDrop}>
            <DropdownToggle caret color="default">
              Agregar
            </DropdownToggle>
            <DropdownMenu>
              {
                this.props.createOption.map(option => (
                  <DropdownItem
                    key={`${option.type}_btn`}
                    onClick={() => {this.handleClick(option.type)}}
                  >
                    {option.label}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </ButtonDropdown>}
          <Button
            color='default'
            onClick={this.toggleModal}
          >
            <i className="fa fa-info-circle" aria-hidden="true" />
          </Button>
        </div>
        <div style={{ position: 'absolute' }}>
          <ModalDetail
            modalOpen={this.state.modalOpen}
            title={this.props.title}
            structureMapped={this.props.structure}
            toggle={this.toggleModal}
          />
        </div>
      </div>
    )
  }
}
