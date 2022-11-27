import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Footer from './Layouts/Footer/Footer';
import Head from './Layouts/Header/Head';
// In react-router-dom v6, "Switch" is replaced by routes "Routes"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
