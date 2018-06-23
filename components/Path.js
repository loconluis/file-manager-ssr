import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Path extends Component {
  render() {
    console.log('this.props on Path', this.props)
    return (
      <div className="finderContainer__workzone-footer">
        {/*this.props.path.map(_path => {
          if (this.props.path.length === 1) {
            return <span data-id={_path.id || 'root' }>{_path.label}</span>
          } else {
            return <span data-id={_path.id}> / {_path.label}</span>
          }
        })*/}
      </div>
    )
  }
}
