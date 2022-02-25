import React from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';

const LoginButton = styled(Button)(({ theme }) => ({
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

const Login = () => {
    const {username, password} = {}
    const handleChange = () => {
        console.log('hello')
    }
    const handleRegister = () => {
        console.log('world')
    }
    return(
        <div style={{display:'block'}}>
            <div>
                Login
            </div>
            <div className="login-container">
                <form 
                    className="login-form"
                    onSubmit={(e) => {
                    e.preventDefault()
                    handleRegister()
                    }}>
                    <h2 className="login-register">Login</h2>
                    <br/>
                    <TextField 
                        required 
                        // id="outlined-basic" 
                        label="Username"
                        name="username"
                        variant="outlined" 
                        value={username}
                        onChange={handleChange}/>
                    <br/>
                    <TextField 
                        required 
                        // id="outlined-basic" 
                        type="password"
                        label="Password" 
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={handleChange} />
                    <br/>
                    <div>
                        <LoginButton type="submit" >
                            Submit
                        </LoginButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login