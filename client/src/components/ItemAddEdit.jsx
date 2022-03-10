import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Checkbox, FormControlLabel, Button, TextField, styled } from '@mui/material';

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#ff7777',
  fontFamily: 'Poppins, sans-serif',
  width: '60vw',
  maxWidth: 194,
  marginTop: 20,
  '&:hover': {
      backgroundColor: '#4fa8fc',
  },
}));

const ItemTextField = styled(TextField)(({  theme }) => ({
    margin: '10px 0px 0px 10px',
}))

export default function ItemAddEdit(props) {
    const { addEditFunction, checked, formData, handleChange, setToggle, setTempItem, currentUser, toggleSet, item_id } = props;
    const navigate = useNavigate()
    const [ checkbox, setCheckbox ] = useState(checked)
    const [ date, setDate ] = useState('')

    useEffect(() => {
        setDate(`${formData.to_do_date.toString().split(' ')[3]}-${formData.to_do_date.toString().split(' ')[1]}-${formData.to_do_date.toString().split(' ')[2]}`)
        console.log(date)
    },[formData])

    return (
        <div className="">
            <form 
                className=""
                onSubmit={(e) => {
                e.preventDefault()
                addEditFunction(formData, item_id)
                setToggle(prevToggle => prevToggle = toggleSet)
                setTempItem({
                    ...formData,
                    id: Math.random(),
                    user_id: currentUser?.id,
                    created_at: Date.now(),
                    updated: Date.now()
                })
                navigate('/home')
                }}>
                <br/>
                <ItemTextField 
                    required 
                    label="Title"
                    name="title"
                    variant="outlined" 
                    value={formData?.title}
                    onChange={handleChange}/>
                <br/>
                <ItemTextField 
                    required 
                    label="Description"
                    name="description"
                    variant="outlined" 
                    value={formData?.description}
                    onChange={handleChange}/>
                <br/>
                <ItemTextField 
                    required 
                    label="Notes"
                    name="notes"
                    variant="outlined" 
                    value={formData?.notes}
                    onChange={handleChange}/>
                <br/>
                <input 
                    type={'date'} 
                    // placeholder={formData?.to_do_date.substring(0,10)}
                    style={{  
                        width: '60vw',
                        maxWidth: 194,
                        margin: '10px 0px 0px 10px',
                    }}
                    name='to_do_date'
                    value={date}
                    onChange={handleChange}
                />
                <br/>
                <FormControlLabel 
                    label='Complete?' 
                    name='completed'
                    // {formData?.completed === true? defaultChecked : ''}
                    checked={checkbox}
                    control={
                        <Checkbox 
                        onChange={
                            (e) => {
                                formData.completed = e.target.checked
                                setCheckbox(prevCheckBox => !prevCheckBox)
                            }
                        }
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
