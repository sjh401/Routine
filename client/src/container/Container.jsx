import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';


export default function Container() {
    return(
        <>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </>

    )
}
