import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<App/>}>
          </Route>
          </Routes>
      </Suspense>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
