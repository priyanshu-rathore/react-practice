import React, { Component } from 'react'

export class ClassComponentProps extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <h3>{this.props.title}</h3>

      </div>
    )
  }
}

export default ClassComponentProps
