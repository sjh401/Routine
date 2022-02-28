import React from 'react';
import { Link } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';

export default function ItemAdd(props) {
  const { postItem, currentUser, handleChange, formData } = props;

  // console.log(formData)
  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        <h2 className="">create an item</h2>
        <ItemAddEdit 
          addEditFunction={postItem}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    </div>
  )
}
