import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Checkbox, FormControlLabel, Button, TextField, styled } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTime } from 'luxon';

export default function ItemAddEdit(props) {
    const LoginButton = styled(Button)(({ theme }) => ({
        color: '#f2e9e4',
        backgroundColor: '#4a4e69',
        fontFamily: 'Poppins, sans-serif',
        width: 100,
        '&:hover': {
            backgroundColor: '#9a8c98',
            color: '#f2e9e4'
        },
    }));
    
    const ItemTextField = styled(TextField)(({  theme }) => ({
        margin: '10px 0px 0px 10px',
    }))
    const { addEditFunction, date, setDate, checked, formData, setToggle, setTempItem, currentUser, toggleSet, item_id, edit } = props;
    const navigate = useNavigate()
    const [ checkbox, setCheckbox ] = useState(checked)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
      }
    
    
    useEffect(() => {
        setCheckbox(checked)
    },[checked])
    // console.log(date)
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
                    id: formData.id,
                    user_id: currentUser?.id,
                    created_at: Date.now(),
                    updated: Date.now()
                })
                navigate('/home')
                }}>
                
                <ItemTextField 
                    required 
                    label="Title"
                    name="title"
                    variant="outlined" 
                    value={formData?.title}
                    onChange={handleChange}/>
                
                <ItemTextField 
                    required 
                    label="Description"
                    name="description"
                    variant="outlined" 
                    value={formData?.description}
                    onChange={handleChange}/>
                
                <ItemTextField 
                    required 
                    label="Notes"
                    name="notes"
                    variant="outlined" 
                    value={formData?.notes}
                    onChange={handleChange}/>
                
                {/* <input 
                    type={'date'} 
                    // placeholder={formData?.to_do_date.substring(0,10)}
                    style={{  
                        width: '60vw',
                        maxWidth: 194,
                        margin: '10px 0px 0px 10px',
                    }}
                    name='to_do_date'
                    value={date}
                    onChange={(e)=>{
                        formData.to_do_date = e.target.value
                        if(edit === true) {
                            setDate(e.target.value)
                        }
                    }}
                /> */}
                
                {/* <LocalizationProvider dateAdapter={AdapterLuxon}>
                    <DesktopDatePicker 
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        name='to_do_date'
                        value={date}
                        onChange={
                            // (e)=>{
                            // formData.to_do_date = new Date(Date.parse(e))
                            // setDate(new Date(Date.parse(e)))
                        // }
                        console.log('hello')
                    }
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> */}
                
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
                
                <div>
                    <LoginButton type="submit" >
                        Submit
                    </LoginButton>
                </div>
            </form>
        </div>
    )
}
