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

export default function ItemAddEdit(props) {
  const { formData, addEditFunction, handleChange} = props;

  // console.log(formData)

  return (
    <div className="">
        <form 
            className=""
            onSubmit={(e) => {
            e.preventDefault()
            addEditFunction(formData)
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
            <div>
                <LoginButton type="submit" >
                    Submit
                </LoginButton>
            </div>
        </form>
    </div>
  )
}
