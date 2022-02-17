import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Container from "./container/Container";
// const Home = lazy(() => import('./screens/Home'));


const App = () => (
    <Layout>
      <Router>
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route path='/' element={<Container/>}/>
          </Routes>
          </Suspense>
      </Router>
    </Layout>
)

export default App;
