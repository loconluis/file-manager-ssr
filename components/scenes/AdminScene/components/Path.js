import React, { Component } from 'react'
import Link from 'next/link'

export default class Path extends Component {
  render() {
    // console.log('this.props on Path', this.props)
    return (
      <div className="finderContainer__workzone-footer">
        {this.props.path.map(_path => {
          if (this.props.path.length === 1) {
            return <Link href={`/admin?node=${_path.id}&type=${_path.type}`}><a data-id={_path.id || 'root' }>{_path.title}</a></Link>
          } else {
            return <Link href={`/admin?node=${_path.id}&type=${_path.type}`}><a data-id={_path.id}> / {_path.title}</a></Link>
          }
        })}
      </div>
    )
  }
}
