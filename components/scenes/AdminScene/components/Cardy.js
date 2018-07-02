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
    return (
      <div>
        <div className="cardy"
          onDoubleClick={this.handleDoubleClick}
          // onClick={props.selectLeaf}
        >
          {/*this.props.children*/}
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
            {/*<button
              className="btn btn-default cardy_3_btn"
              onClick={this.self}
            >
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </button>*/}
          </div>
        </div>
        <div className="cardy__label">
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }
}
