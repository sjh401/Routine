import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const RegisterButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    fontFamily: 'Poppins, sans-serif',
    width: '60vw',
    maxWidth: 194,
    marginTop: 10,
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

export default function Register({handleRegister}) {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        username: ''
    });
    const {first_name, last_name, username, email, password} = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    return(
        <>
            <div>
                Register
            </div>
            <div className="login-container">
                <form 
                    className="login-form"
                    onSubmit={(e) => {
                    e.preventDefault()
                    handleRegister(formData)
                    }}>
                    <h2 className="login-register">Register</h2>
                    <br/>
                    <TextField 
                        required 
                        label="First Name" 
                        name="first_name"
                        variant="outlined"
                        value={first_name}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        label="Last Name" 
                        name="last_name"
                        variant="outlined"
                        value={last_name}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        label="Username"
                        name="username"
                        variant="outlined" 
                        value={username}
                        onChange={handleChange}/>
                    <br/>
                    <TextField 
                        required 
                        type="email"
                        label="Email" 
                        name="email"
                        variant="outlined"
                        value={email}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        type="password"
                        label="Password" 
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={handleChange} />
                    <br/>
                    <div>
                        <RegisterButton type="submit" >
                            Submit
                        </RegisterButton>
                    </div>
                </form>
            </div>
        </>
    )
}
