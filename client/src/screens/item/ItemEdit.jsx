import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ItemAddEdit from '../../components/ItemAddEdit';

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
  const singleItem = allItems.filter(element => element.id === Number(item_id.id))
  console.log(singleItem)
  setFormData(singleItem[0])
  setTempItem(singleItem[0])
  setCheckbox(singleItem[0].completed)
  let newDate = new Date(`${formData.to_do_date.toString().split(' ')[3]}-${formData.to_do_date.toString().split(' ')[1]}-${formData.to_do_date.toString().split(' ')[2]}`)
  setDate(`${newDate.getFullYear()}-${Number(newDate.getMonth())<10? '0'.concat(Number(newDate.getMonth())+1):Number(newDate.getMonth())+1}-${Number(newDate.getDay()<10)? '0'.concat(Number(newDate.getDay())+1):Number(newDate.getDay())+1}`)
}, [allItems])

  // console.log(Date(formData?.to_do_date.toString().split(' ')[3], formData?.to_do_date.toString().split(' ')[1], formData?.to_do_date.toString().split(' ')[2]))
  // console.log(formData.to_do_date.substring(0,10))
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
          item_id={item_id.id}
          toggleSet={'PUT'}
          checked={checkbox}
          date={date}
          setDate={setDate}
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