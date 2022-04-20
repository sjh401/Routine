import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calendar from '../screens/calendar/Calendar';
import CalendarDay from '../screens/calendar/CalendarDay';
import Home from '../screens/home/Home';
import ItemAdd from '../screens/item/ItemAdd';
import ItemDetail from '../screens/item/ItemDetail';
import ItemEdit from '../screens/item/ItemEdit';
import User from '../screens/user/User';
import { deleteItem, getAllItems, getUserItems, postItem, putItem } from '../services/items';


export default function Container(props) {
    const { currentUser } = props;
    const [ allItems, setAllItems ] = useState([]);
    const [ toggle, setToggle ] = useState('');
    const [ tempItem, setTempItem ] = useState({
        description: '',
        notes:'',
        title:'',
        completed: '',
        id: 0,
        user_id: currentUser?.id,
        created_at: Date.now(),
        updated: Date.now()
    })

    useEffect(() => {
        const fetchUserItems = async () => {
            const userItems = await getUserItems();

            setAllItems(userItems)
        }
        fetchUserItems();
    }, [currentUser]);

    // useEffect(() => {
        
    // },[])

    useEffect(() => {
        if(toggle === 'DELETE'){
            setAllItems(allItems.filter(item => item.id !== Number(tempItem.id)))
            setToggle(prevToggle => prevToggle ='')
        } else if(toggle === 'POST'){
            allItems.push(tempItem)
            setAllItems(allItems)
            setToggle(prevToggle => prevToggle ='')
        } else if(toggle === 'PUT'){
            setAllItems(allItems.map(item => {
                if(item.id === Number(tempItem.id)){
                    console.log('here')
                    return tempItem
                } else {
                    return item
                }
            }))
            setToggle(prevToggle => prevToggle ='')
            console.log(allItems)
        }
    },[toggle])

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
                            setAllItems={setAllItems}
                            allItems={allItems}
                            toggle={toggle}
                            tempItem={tempItem}
                            setToggle={setToggle}
                        />
                    }
                />
                <Route 
                    path="/calendar" 
                    element={
                        <Calendar
                            allItems={allItems}
                        />
                    }
                />
                <Route 
                    path="/calendar/:date"
                    element={
                        <CalendarDay
                            allItems={allItems}
                            currentUser={currentUser}
                        />
                    }
                />
                <Route 
                    path="/item/add" 
                    element={
                        <ItemAdd
                            postItem={postItem}
                            currentUser={currentUser}
                            setToggle={setToggle}
                            setTempItem={setTempItem}
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
                            setToggle={setToggle}
                            setTempItem={setTempItem}
                            tempItem={tempItem}
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
