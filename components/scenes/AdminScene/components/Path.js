import React, { Component } from 'react'
import Link from 'next/link'

export default class Path extends Component {
  render() {
    // console.log('this.props on Path', this.props)
    return (
      <div className="finderContainer__workzone-footer">
        {this.props.path.map(_path => (
          <div
            key={`bc_${_path.id}`}
            style={{ display: 'flex' }}
          >
            <Link
              href={`/admin?node=${_path.id}&type=${_path.type}`}
            >
              <a style={{ paddingLeft: '5px', paddingRight: '5px' }}> {_path.title} </a>
            </Link>
            <p>/</p>
          </div>)
        )}
      </div>
    )
  }
}
