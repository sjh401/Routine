import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Checkbox, FormControlLabel, Button, TextField, styled } from '@mui/material';

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

export default function ItemAddEdit(props) {
    const { addEditFunction, formData, handleChange, setToggle, setTempItem, currentUser, toggleSet } = props;
    const navigate = useNavigate()

    return (
        <div className="">
            <form 
                className=""
                onSubmit={(e) => {
                e.preventDefault()
                addEditFunction(formData)
                setToggle(prevToggle => prevToggle = toggleSet)
                setTempItem({
                    ...formData,
                    id: 0,
                    user_id: currentUser?.id,
                    created_at: Date.now(),
                    updated: Date.now()
                })
                navigate('/home')
                }}>
                <br/>
                <TextField 
                    required 
                    label="Title"
                    name="title"
                    variant="outlined" 
                    value={formData?.title}
                    onChange={handleChange}/>
                <br/>
                <TextField 
                    required 
                    label="Description"
                    name="description"
                    variant="outlined" 
                    value={formData?.description}
                    onChange={handleChange}/>
                <br/>
                <TextField 
                    required 
                    label="Notes"
                    name="notes"
                    variant="outlined" 
                    value={formData?.notes}
                    onChange={handleChange}/>
                <br/>
                <FormControlLabel 
                    label='Complete?' 
                    name='completed'
                    // {formData?.completed === true? defaultChecked : ''}
                    checked={formData?.completed}
                    control={
                        <Checkbox 
                        onChange={(e) => formData.completed = e.target.checked}
                        />}
                    onChange={handleChange}
                    value={formData?.completed}
                />
                <br/>
                <div>
                    <LoginButton type="submit" >
                        Submit
                    </LoginButton>
                </div>
            </form>
        </div>
    )
}
