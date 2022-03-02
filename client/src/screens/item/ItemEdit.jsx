import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';

export default function ItemEdit(props) {
  const { putItem, allItems, deleteItem, setToggle, setTempItem, currentUser, tempItem } = props;
  const item_id = useParams();
  const navigate = useNavigate();

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
      completed: singleItem[0].completed,
      id: Number(item_id.id)
  });
  setTempItem({
    description: singleItem[0].description ,
    notes: singleItem[0].notes ,
    title: singleItem[0].title ,
    completed: singleItem[0].completed,
    id: Number(item_id.id),
    user_id: currentUser?.id,
    created_at: Date.now(),
    updated: Date.now()
})
  }, [])
console.log(allItems)
  console.log('formData')
console.log(tempItem)

  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        <h2 className="">edit an item</h2>
        <ItemAddEdit 
          addEditFunction={putItem}
          handleChange={handleChange}
          formData={formData}
          setToggle={setToggle}
          setTempItem={setTempItem}
          currentUser={currentUser}
          toggleSet={'PUT'}
        />
      </div>
      <button onClick={() => {
        deleteItem(item_id.id)
        navigate('/home')
        setToggle(prevToggle => prevToggle = 'DELETE')
        }}>
          Delete
      </button>
    </div>
  )
}