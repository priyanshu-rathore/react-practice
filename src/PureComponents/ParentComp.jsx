 import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
 
 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Priyanshu"
      }
    }


    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Priyanshu"})
        },2000)
    }
    
   render() {
    console.log("Parent component render")
     return (
       <div>
         Parent Component
         <RegComp name={this.state.name}/>
         <PureComp name={this.state.name}/>
       </div>
     )
   }
 }
 
 export default ParentComp
 