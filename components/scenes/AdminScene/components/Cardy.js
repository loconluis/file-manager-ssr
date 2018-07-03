import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Cardy extends Component {
  state = {
    dropdownOpen: false,
  }

  handleDoubleClick = () => {
    let validator = {
      label: this.props.children,
      id: this.props.node.data.id,
      type: this.props.node.data.type,
    }
    console.log('validators', validator)
    this.props.onDoubleClick(validator)
  }

  self = () => {
    this.props.buttonClick(this.props.node)
  }

  toggleDropDown = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }))
  }

  render() {
    console.log('cardy', this.props)
    return (
      <div>
        <div className="cardy"
          onDoubleClick={this.handleDoubleClick}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ButtonDropdown
              direction="left"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropDown}
            >
              <DropdownToggle color="default" className="cardy_3_btn">
                <i className="fa fa-ellipsis-v" aria-hidden="true" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={this.self}
                >
                  Detalle
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="text-center cardy__icon">
            <p>
              {<i className={this.props.node.data.icon}/>}
            </p>
          </div>
        </div>
        <div className="cardy__label">
          <p>{this.props.node.data.title}</p>
        </div>
      </div>
    )
  }
}
