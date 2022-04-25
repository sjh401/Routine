import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';
import { Button, styled } from '@mui/material';

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

export default function ItemEdit(props) {
  const { putItem, allItems, deleteItem, setToggle, setTempItem, currentUser, tempItem } = props;
  const item_id = useParams();
  const navigate = useNavigate();
  const [ checkbox, setCheckbox ] = useState(false)
  const [ formData, setFormData ] = useState({
    description: '',
    notes: '',
    title: '',
    completed: false,
    to_do_date: new Date
  });
  const [ date, setDate ] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  useEffect(() => {
    const singleItem = allItems.length ? allItems.filter(element => element.id === Number(item_id.id)) : [];
    setFormData(singleItem[0])
    setTempItem(singleItem[0])
    setCheckbox(singleItem[0]?.completed)
    let newDate = new Date(`${formData?.to_do_date.toString().split(' ')[3]}-${formData?.to_do_date.toString().split(' ')[1]}-${formData?.to_do_date.toString().split(' ')[2]}`)
    setDate(`${newDate.getFullYear()}-${Number(newDate.getMonth())<10? '0'.concat(Number(newDate.getMonth())+1):Number(newDate.getMonth())+1}-${Number(newDate.getDate()<10)? '0'.concat(Number(newDate.getDate())+1):Number(newDate.getDate())+1}`)
  }, [allItems])

  return (
    <div className='item-grid'>
      <div className='item-content'>
        <div className="add-edit-label">edit an item</div>
        <ItemAddEdit 
          addEditFunction={putItem}
          handleChange={handleChange}
          formData={formData}
          setToggle={setToggle}
          setTempItem={setTempItem}
          currentUser={currentUser}
          item_id={item_id.id}
          toggleSet={'PUT'}
          checked={checkbox}
          date={date}
          setDate={setDate}
          edit={true}
        />
      <ItemButton 
        onClick={() => {
          deleteItem(item_id.id)
          navigate('/home')
          setToggle(prevToggle => prevToggle = 'DELETE')
        }}>
          Delete
      </ItemButton>
      </div>
    </div>
  )
}