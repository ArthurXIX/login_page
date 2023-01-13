import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input value={email} type="email" placeholder="youremail@mail.com" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input value={pass} type="password" placeholder="Your password" id="password" name="password" />
            <button>Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </>
    )
}