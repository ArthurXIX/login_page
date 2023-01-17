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
        <div className="form">
        <form className="registerForm" onSubmit={handleSubmit}>

            <label htmlFor="name">Nombre:</label>
            <input value={name} type="text" placeholder="John Arthur" name="name" id="name" onChange={e => setName(e.target.value)}/>

            <label htmlFor="email">Email:</label>
            <input value={email} type="email" placeholder="youremail@mail.com" id="email" name="email" onChange={e => setEmail(e.target.value)}/>

            <label htmlFor="password">Password:</label>
            <input value={pass} type="password" placeholder="Your password" id="password" name="password" onChange={e => setPass(e.target.value)}/>
            <button className="submitReg">Register</button>
        </form>
        <button className="loginButton"  onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
        </>
    )
}