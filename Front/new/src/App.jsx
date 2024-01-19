import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Basket from './pages/Basket';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
