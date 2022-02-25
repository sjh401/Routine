import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SignUpButton = styled(Button)(({ theme }) => ({
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

export default function SignUp() {

    const {first_name, last_name, username, email, password} = {};
    const handleChange = () => {
        console.log('hello')
    }
    const handleRegister = () => {
        console.log('world')
    }
    return(
        <>
            <div>
                Sign Up
            </div>
            <div className="login-container">
                <form 
                    className="login-form"
                    onSubmit={(e) => {
                    e.preventDefault()
                    handleRegister()
                    }}>
                    <h2 className="login-register">Register</h2>
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="First Name" 
                        name="first_name"
                        variant="outlined"
                        value={first_name}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="Last Name" 
                        name="last)name"
                        variant="outlined"
                        value={last_name}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="Username"
                        name="username"
                        variant="outlined" 
                        value={username}
                        onChange={handleChange}/>
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        type="email"
                        label="Email" 
                        name="email"
                        variant="outlined"
                        value={email}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        type="password"
                        label="Password" 
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={handleChange} />
                    <br/>
                    <div>
                        <SignUpButton type="submit" >
                            Submit
                        </SignUpButton>
                    </div>
                </form>
            </div>
        </>
    )
}
