import React from 'react';
import { useFormInput } from '../customHook/useFormInput';


function Form() {
    const firstName = useFormInput({ name: "fName", initialvalue: "yasir" });
    const lastName = useFormInput({ name: "lName", initialvalue: "mehmood" });
    const email = useFormInput({ type: "email", name: "email", initialvalue: "" });

    return (
        <>
            <label>
                First name:
                <input {...firstName} />
            </label>
            <label>
                Last name:
                <input {...lastName} />
            </label>
            <label>
                Email:
                <input {...email} />
            </label>
            <p><b>Good morning, {firstName.value} {lastName.value}.</b></p>
        </>
    )
}

export default Form;
