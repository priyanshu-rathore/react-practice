import React from "react";

const ControlledComponents = () => {
    const[person,setPerson] = React.useState("Guest")
    
    const changePerson = (e) => {
        setPerson(e.target.value)
    }

  return <>
    <h1>Welcome {person}</h1>
  <input type="text" onChange={changePerson} />

  </>;
};

export default ControlledComponents;
