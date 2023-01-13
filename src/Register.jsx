import React, {useState} from "react"



export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Nombre:</label>
            <input value={name} type="text" placeholder="John Arthur" name="name" id="name" />

            <label htmlFor="email">Email:</label>
            <input value={email} type="email" placeholder="youremail@mail.com" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input value={pass} type="password" placeholder="Your password" id="password" name="password" />
            <button>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </>
    )
}