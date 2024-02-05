import React, { useState } from "react";
import Form from "./Form"
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsLetter, setNewsLetter] = useState(false);


  function handleFirstName(event){

    setFirstName(event.target.value);
  }
  function handleLastName(event){
    setLastName(event.target.value);
  }

  function handleNewsLetterChange(event) {
  
    setNewsLetter(event.target.checked);
  }

  return (
    <div>
      <Form 
         firstName={firstName}
         lastName={lastName}
         handleFirstName={handleFirstName}
         handleLastName={handleLastName}
         newsLetter={newsLetter}
         handleNewsLetterChange={handleNewsLetterChange}   
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}
export default ParentComponent;