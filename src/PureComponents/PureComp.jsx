import React, { Component } from 'react'

class PureComp extends React.PureComponent {
    
    
  render() {
    console.log("Pure component render")

    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default PureComp
