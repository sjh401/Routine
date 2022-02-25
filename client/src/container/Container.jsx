import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';


export default function Container({currentUser}) {
    return(
        <>
            <Routes>
                <Route 
                    path="/home" 
                    element={
                        <Home
                            currentUser={currentUser}
                        />
                    }
                />
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </>

    )
}
