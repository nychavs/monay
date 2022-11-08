import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Duvidas from './pages/Duvidas';
import Sobre from './pages/Sobre';
import Api from './pages/Fecth';
import HomeUser from './pages/HomeUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/duvidas' element={<Duvidas />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/homeuser' element={<HomeUser />} />
        <Route path='/api' element={<Api />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
