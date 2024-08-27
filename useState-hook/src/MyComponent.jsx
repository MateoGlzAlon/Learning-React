import React, { useState } from 'react'

function MyComponent() {

    //initialize state as Guest
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const updateName = () => {
        //Change name to Mateo when button is clicked
        setName("Mateo");
    }

    const incrementAge = () => {
        //Increment age by 1 when button is clicked
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        //Toggle employed status when button is clicked
        setEmployed(!isEmployed);
    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age</button>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>

    </div>)

}
export default MyComponent