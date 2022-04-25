import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';
import './Item.css'

export default function ItemAdd(props) {
  const { postItem, setToggle, setTempItem, currentUser } = props;
  const [ formData, setFormData ] = useState({
    description: '',
    notes: '',
    title: '',
    completed: false,
    to_do_date: Date.now(),
  });
  const [ date, setDate ] = useState('')
  // const toggleSet = 'ADD'
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
  }

  return (
    <div className='item-grid'>
      <div className='item-content'>
        <div className="add-edit-label">create an item</div>
        <ItemAddEdit 
          addEditFunction={postItem}
          formData={formData}
          handleChange={handleChange}
          setToggle={setToggle}
          setTempItem={setTempItem}
          currentUser={currentUser}
          toggleSet={'POST'}
          checked={false}
          edit={false}
          setDate={setDate}
          date={date}
        />
      </div>
    </div>
  )
}
