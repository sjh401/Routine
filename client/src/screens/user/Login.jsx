import React, { useState } from 'react';
import { Button, TextField, styled } from '@mui/material';


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

const Login = ({handleLogin}) => {
    const [ formData, setFormData ] = useState({
        password: '',
        username: ''
    });
    const {username, password} = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
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
                    handleLogin(formData)
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