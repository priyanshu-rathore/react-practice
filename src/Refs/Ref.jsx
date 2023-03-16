import React, { Component } from 'react'

export class Ref extends Component {
   constructor(props) {
     super(props)
   
     this.inputRef = React.createRef()
   }
   
   componentDidMount(){
    this.inputRef.current.focus()
   }

   clickHandler = () =>{
    alert(this.inputRef.current.value)
   }
    
  render() {
    console.log(this.inputRef)
    return (
      <div>
            <input type="text" ref={this.inputRef} />
            <button onClick={this.clickHandler}>submit</button>
      </div>
    )
  }
}

export default Ref
