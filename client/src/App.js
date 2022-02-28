import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Container from "./container/Container";
import Login from "./screens/user/Login"
import Register from "./screens/user/Register";
import { loginUser, registerUser, removeToken, verifyUser } from "./services/auth";



const App = () => {
  const [ currentUser, setCurrentUser ] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    } 
    handleVerify();
  },[])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    navigate('/home');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    navigate('/home');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
  }
  return (
    <Layout 
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <Routes>
        <Route 
          path="/login" 
          element={
            <Login
              handleLogin={handleLogin}
            />
          }
        />
        <Route 
          path="/register" 
          element={
            <Register
              handleRegister={handleRegister}
            />
          }
        />
        <Route 
          path="/*" 
          element={
            <Container
              currentUser={currentUser}
            />
          }
        />
      </Routes>
    </Layout>
  )
  }

export default App;