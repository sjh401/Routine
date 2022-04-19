import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';

export default function ItemAdd(props) {
  const { postItem, setToggle, setTempItem, currentUser } = props;
  const [ formData, setFormData ] = useState({
    description: '',
    notes: '',
    title: '',
    completed: false,
    to_do_date: Date.now(),
});
// const toggleSet = 'ADD'
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }))
}

  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        <h2 className="">create an item</h2>
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
        />
      </div>
    </div>
  )
}
