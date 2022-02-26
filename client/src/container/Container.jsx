import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
import ItemAdd from '../screens/ItemAdd';
import ItemDetail from '../screens/ItemDetail';
import ItemEdit from '../screens/ItemEdit';
import User from '../screens/User';
import { deleteItem, getAllItems, getItem, postItem, putItem } from '../services/items';


export default function Container({currentUser}) {
    const [ allItems, setAllItems ] = useState({})
    useEffect(() => {
        const fetchItems = async () => {
            const items = await getAllItems();
            setAllItems(items)
        }
        fetchItems();
    }, [])
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
