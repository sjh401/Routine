import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Container from "./container/Container";
import Login from "./screens/Login"
import Register from "./screens/Register";



const App = () => {

  const handleRegister = () => {
    
  }
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