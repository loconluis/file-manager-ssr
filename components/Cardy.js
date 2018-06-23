import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Cardy extends Component {
  state = {
    dropdownOpen: false,
  }

  handleDoubleClick = () => {
    console.log('this.props.node', this.props.node)
    let validator = {
      label: this.props.children,
      parentID: this.props.node.parentId,
      id: this.props.node.id
    }
    this.props.onDoubleClick(validator)
  }

  self = () => {
    console.log('Self is called')
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
