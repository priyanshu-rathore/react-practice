import React, { Component } from 'react'

export class State extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Priyanshu",
            age:21
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.name} {this.state.age}</h1>
      </div>
    )
  }
}

export default State
