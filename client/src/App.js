import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Container from "./container/Container";
// const Home = lazy(() => import('./screens/Home'));


const App = () => (
    <Layout>
          {/* <Routes> */}
            {/* <Route path='/' element={<Container/>}/> */}
          {/* </Routes> */}
    </Layout>
)

export default App;
