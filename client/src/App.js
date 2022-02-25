import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Container from "./container/Container";
import Calendar from "./screens/Calendar";
import Home from "./screens/Home";
import Login from "./screens/Login"
import Register from "./screens/Register";
// const Home = lazy(() => import('./screens/Home'));


const App = () => {
  console.log('app loads');
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<Container/>}/>
      </Routes>
    </Layout>
  )
  }

export default App;