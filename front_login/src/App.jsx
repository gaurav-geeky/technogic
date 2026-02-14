import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Product from './pages/Product';


function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>



      </div>
    </>
  )
}

export default App; 
