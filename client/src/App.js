import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Container from "./container/Container";
import Login from "./screens/Login"
// const Home = lazy(() => import('./screens/Home'));


const App = () => {

  return (
    <Layout>
      <div>hello</div>
    </Layout>
  )
  }

export default App;


//closure parameters