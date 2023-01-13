import React, {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <form action="">
            <label for="email">Email:</label>
            <input value={email} type="email" placeholder="youremail@mail.com" id="email" name="email" />

            <label for="password">Password:</label>
            <input value={pass} type="password" placeholder="Your password" id="password" name="password" />
            <button>Log In</button>
        </form>
    )
}