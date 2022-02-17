import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
const Home = lazy(() => import('./screens/Home'));


const App = () => (
    <Layout>
      <Router>
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          </Suspense>
      </Router>
    </Layout>
)

export default App;
