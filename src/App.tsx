import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Admincrud from './pages/Admincrud'
import Aboutus from './pages/Aboutus';
import Pricing from './pages/Pricing'
import { PrivateRoute } from './components/PrivateRoute';
import Login from './pages/Login';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
         <Route path="/admin" element={
          <PrivateRoute>
            <Admincrud/>
            </PrivateRoute>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
