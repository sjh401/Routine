import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Checkbox, FormControlLabel, Button, TextField, styled } from '@mui/material';


const ItemButton = styled(Button)(({ theme }) => ({
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

const ItemTextField = styled(TextField)(({  theme }) => ({
    margin: '10px 0px 0px 10px',
}))
export default function ItemAddEdit(props) {
    const { addEditFunction, date, setDate, checked, formData, handleChange, setToggle, setTempItem, currentUser, toggleSet, item_id, edit } = props;
    const navigate = useNavigate()
    const [ checkbox, setCheckbox ] = useState(checked)
    
    useEffect(() => {
        setCheckbox(checked)
    },[checked])

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
                    style={{  
                        backgroundColor: '#f2e9e4',
                        borderWidth: '1px',
                        borderColor: 'rgba(0,0,0,0.25)',
                        borderRadius: '4px',
                        height: '23px',
                        padding: '16.5px 14px',
                        width: '164px',
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
                />
                <br/>
                <FormControlLabel 
                    id='checkbox'
                    label='Complete?' 
                    name='completed'
                    // {formData?.completed === true? defaultChecked : ''}
                    checked={checkbox}
                    style={{
                        width: '164px',
                        margin: '0px 0px 0px 10px',
                    }}
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
                    <ItemButton 
                        id='item-button'
                        type="submit" 
                    >
                        Submit
                    </ItemButton>
                </div>
            </form>
        </div>
    )
}
