import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Admincrud from './pages/Admincrud'
import Aboutus from './pages/Aboutus';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
         <Route path="/admin" element={<Admincrud/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
