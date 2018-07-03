import React, { Component } from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default class Toolbar extends Component {
  state = {
    dropdownOpen: false,
  }

  toggle = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }))
  }

  handleClick = (type) => {
    this.props.handleNewNode(type)
  }

  render() {
    return (
      <div className="finderContainer__workzone-toolbar">
        <div className="finderContainer__workzone-toolbar__title">
          <p>{this.props.title && this.props.title.toUpperCase() || ''}</p>
        </div>
        <div className="finderContainer__workzone-toolbar__buttons">
        {(this.props.createOption && this.props.createOption.length > 0) && 
          <ButtonDropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
          {/*this.props.createOption && 
            this.props.createOption.map(option => (
              <Button
                color="default"
              >
                {option.label}
              </Button>
          ))*/}
        </div>
      </div>
    )
  }
}
