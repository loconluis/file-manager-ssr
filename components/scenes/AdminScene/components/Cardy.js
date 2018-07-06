import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Cardy extends Component {
  state = {
    dropdownOpen: false,
  }

  handleDoubleClick = () => {
    let validator = {
      label: this.props.node.data.title,
      id: this.props.node.data.id,
      type: this.props.node.data.type,
    }
    this.props.onDoubleClick(validator)
  }

  self = () => {
    this.props.buttonClick(this.props.node)
  }

  toggleDropDown = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }))
  }

  render() {
    console.log('this.props.cardyOption', this.props.cardyOption)
    return (
      <div>
        <div className="cardy"
          onDoubleClick={this.handleDoubleClick}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {this.props.cardyOption && <ButtonDropdown
              direction="left"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropDown}
            >
              <DropdownToggle color="default" className="cardy_3_btn">
                <i className="fa fa-ellipsis-v" aria-hidden="true" />
              </DropdownToggle>
              <DropdownMenu>
                {this.props.cardyOption.map(_option => (
                  <DropdownItem
                    key={_option.label+'dpitem'}
                    onClick={() => _option.func(this.props.node)}
                  >
                    {_option.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>}
          </div>
          <div className="text-center cardy__icon">
            <p>
              {!!this.props.single ? <img className='cardy__avatar' src={this.props.node.data.img} /> : <i className={this.props.node.data.icon}/>}
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

{/*<DropdownItem
                  onClick={this.self}
                >
                  Detalle
                </DropdownItem>*/}