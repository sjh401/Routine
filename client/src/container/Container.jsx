import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
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
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </>

    )
}
