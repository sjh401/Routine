import React, { useState } from 'react';
import { Button, TextField, styled } from '@mui/material';

const RegisterButton = styled(Button)(({ theme }) => ({
    color: '#f2e9e4',
    backgroundColor: '#4a4e69',
    fontFamily: 'Poppins, sans-serif',
    width: 194,
    padding: '16.5px 14px',
    margin: '10px 0px 0px 10px',
    '&:hover': {
        backgroundColor: '#9a8c98',
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
