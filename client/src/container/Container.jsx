import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calendar from '../screens/calendar/Calendar';
import Home from '../screens/home/Home';
import ItemAdd from '../screens/item/ItemAdd';
import ItemDetail from '../screens/item/ItemDetail';
import ItemEdit from '../screens/item/ItemEdit';
import User from '../screens/user/User';
import { deleteItem, getAllItems, postItem, putItem } from '../services/items';


export default function Container(props) {
    const [ allItems, setAllItems ] = useState([]);
    const { currentUser } = props;

    useEffect(() => {
        const fetchItems = async () => {
            const items = await getAllItems();
            setAllItems(items?.filter(element => element.user_id === currentUser?.id));
        }
        fetchItems();
    }, [currentUser]);
    


    return(
        <>
            {!currentUser && 
            <div>
                <h2>
                    Hello there
                </h2>
                <img 
                    src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/49/1481301038-hot-fuzz.jpg' 
                    alt='Nicholas Angel eating a cornetto'
                    style={{height: '200px'}}
                />
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
            }
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
                    path="/item/add" 
                    element={
                        <ItemAdd
                            postItem={postItem}
                            currentUser={currentUser}
                        />
                    }
                />
                <Route 
                    path="/item/edit/:id" 
                    element={
                        <ItemEdit
                            allItems={allItems}
                            putItem={putItem}
                            deleteItem={deleteItem}
                            currentUser={currentUser}
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
                    path="/user" 
                    element={
                        <User
                            currentUser={currentUser}
                        />
                    }
                />
            </Routes>
        </>

    )
}
