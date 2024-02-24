import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Gallery/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default Routing
