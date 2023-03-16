import React, { Component } from 'react'

export class SetState extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Priyanshu",
            age:21
        }}
        
    change(){
        this.setState({name:"Rahul",age:22})
    }
        
  render() {

    return (
      <div>
        <h1>{this.state.name} {this.state.age}</h1>
        <button onClick={() => this.change()}>change</button>
      </div>
    )
  }
}

export default SetState
