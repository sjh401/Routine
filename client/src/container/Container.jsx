import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../screens/calendar/Calendar';
import Home from '../screens/home/Home';
import ItemAdd from '../screens/item/ItemAdd';
import ItemDetail from '../screens/item/ItemDetail';
import ItemEdit from '../screens/item/ItemEdit';
import User from '../screens/user/User';
import { deleteItem, getAllItems, getItem, postItem, putItem } from '../services/items';


export default function Container(props) {
    const [ allItems, setAllItems ] = useState([])
    const { currentUser } = props;
    const [ formData, setFormData ] = useState({
        description: '',
        notes: '',
        title: '',
        completed: false,
        user_id: currentUser?.id
    });

    console.log(formData)
    useEffect(() => {
        const fetchItems = async () => {
            const items = await getAllItems();
            setAllItems(items.filter(element => element.user_id === currentUser?.id));
        }
        fetchItems();
    }, [currentUser]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }


    return(
        <>
            <Routes>
                <Route 
                    path="/home" 
                    element={
                        <Home
                            currentUser={currentUser}
                            allItems={allItems}
                        />
                    }
                />
                <Route 
                    path="/calendar" 
                    element={
                        <Calendar
                        />
                    }
                />
                <Route 
                    path="/add" 
                    element={
                        <ItemAdd
                            postItem={postItem}
                            currentUser={currentUser}
                            handleChange={handleChange}
                            formData={formData}
                        />
                    }
                />
                <Route 
                    path="/item/:id" 
                    element={
                        <ItemDetail
                            allItems={allItems}
                        />
                    }
                />
                <Route 
                    path="/item/:id" 
                    element={
                        <ItemEdit
                        />
                    }
                />
                <Route 
                    path="/user" 
                    element={
                        <User
                        />
                    }
                />
            </Routes>
        </>

    )
}
