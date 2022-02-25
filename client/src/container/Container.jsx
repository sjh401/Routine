import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import App from '../App';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
import { Component } from 'react';

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
