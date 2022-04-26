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

export default function TestingItemEdit(props) {
  const { item, putItem, deleteItem, setToggle, setTempItem, currentUser, item_id } = props;
  const [ checkbox, setCheckbox ] = useState(false)
  const [ formData, setFormData ] = useState({
    description: '',
    notes: '',
    title: '',
    completed: false,
    to_do_date: new Date
  });
  const [ date, setDate ] = useState('')
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
  useEffect(() => {
    const singleItem = item.length ? item[0] : [];
    console.log(singleItem)
    setFormData(singleItem)
    setTempItem(singleItem)
    setCheckbox(singleItem.completed)
    let newDate = new Date(`${singleItem?.to_do_date.toString().substring(0,4)}-${singleItem?.to_do_date.toString().substring(5,7)}-${singleItem?.to_do_date.toString().substring(8,10)}`)
    setDate(`${newDate.getFullYear()}-${Number(newDate.getMonth())<10? '0'.concat(Number(newDate.getMonth())+1):Number(newDate.getMonth())+1}-${Number(newDate.getDate()<10)? '0'.concat(Number(newDate.getDate())):Number(newDate.getDate())+1}`)
  }, [item])
  console.log(date)

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