import React, {useState} from "react";

export function GreetingAgain() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    return (
        <>
            <div className="container">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" value={firstName} onChange={(e) => handleFirstNameChange(e)}/>
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" value={lastName} onChange={(e) => handleLastNameChange(e)}/>

                <p>
                    Hello ,{" "}
                    <span>
                        {firstName} {lastName}
                    </span>
                </p>
            </div>

        </>

    )

}