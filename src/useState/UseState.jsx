import React,{useState} from 'react'

const UseState = () => {
const [person,setPerson] = useState({name:"Priyanshu",age:21})
const change = () => {
    setPerson((prevState)=>({
        ...prevState,age:22
    }))
}
  return (
    <div>my name is {person} and my age is {age}
        <button onClick={change}>change</button> 
             </div>
  )
}

export default UseState