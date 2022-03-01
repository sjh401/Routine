import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';

export default function ItemEdit(props) {
  const { putItem, allItems } = props;
  const item_id = useParams();

  const [ formData, setFormData ] = useState({
    description: '',
    notes: '',
    title: '',
    completed: false
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }))
}

  useEffect(() => {
    const singleItem = allItems.filter(element => element.id === Number(item_id.id))
    setFormData({
      description: singleItem[0].description ,
      notes: singleItem[0].notes ,
      title: singleItem[0].title ,
      completed: singleItem[0].completed
  });
  }, [allItems])

  console.log(formData)
  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        <h2 className="">edit an item</h2>
        <ItemAddEdit 
          addEditFunction={putItem}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    </div>
  )
}