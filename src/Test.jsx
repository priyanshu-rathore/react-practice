import React from 'react'
import TestChild from './TestChild'

const Test = () => {
    const [person,setPerson] = React.useState({fistName:"Priyanshu",lastName:"Rathore",age:21})
    const change = () =>{
        setPerson((prevState)=>({...prevState,age:22}))
    }

    React.useEffect(()=>{
        console.log("mounting phase")
        return () =>{
            console.log("Unmounting Phase")
        } 
    },[])

  

    React.useEffect(()=>{
        console.log("Updating phase")
    },[person.age])

  return (
    <div>
        my name is {person.fistName} {person.lastName} {person.age}
        <TestChild change={change}/>
    </div>
  )
}

export default Test