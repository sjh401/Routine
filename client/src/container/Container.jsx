import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../screens/calendar/Calendar';
import Home from '../screens/home/Home';
import ItemAdd from '../screens/item/ItemAdd';
import ItemDetail from '../screens/item/ItemDetail';
import ItemEdit from '../screens/item/ItemEdit';
import User from '../screens/user/User';
import { deleteItem, getAllItems, getItem, postItem, putItem } from '../services/items';


export default function Container({currentUser}) {
    const [ allItems, setAllItems ] = useState({})

    useEffect(() => {
        const fetchItems = async () => {
            const items = await getAllItems();
            setAllItems(items)
        }
        fetchItems();
    }, []);


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
                        />
                    }
                />
                <Route 
                    path="/item" 
                    element={
                        <ItemDetail
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
