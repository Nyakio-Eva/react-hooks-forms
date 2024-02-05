import React, { useState } from "react";

function Form({
    firstName,
    lastName,
    handleFirstName,
    handleLastName,
    newsLetter,
    handleNewsLetterChange,
}){
  const[number,setNumber]= useState(0);
  const[isInvalidNumber, setIsInvalidNumber]= useState(null);

  function handleNumberChange(event){
    const newNumber = parseInt(event.target.value);
    if(newNumber >= 0 && newNumber <= 5){
      setNumber(newNumber);
      setIsInvalidNumber(null);
    }else{
        setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }
  return(
    <div>
      <form>
          <input type="text" onChange={handleFirstName} value={firstName} />
          <input type="text" onChange={handleLastName} value={lastName} />
          <input type="number" onChange={handleNumberChange} value={number} />
          {isInvalidNumber ? <span style={{color: "red"}}> { isInvalidNumber}</span> : null}
          <button type="submit">Submit</button>
        </form>

        <form>
          <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
          <input
            type="checkbox"
            id="newsletter"
            onChange={handleNewsLetterChange}
            
            checked={newsLetter}
          />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default Form;
