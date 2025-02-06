import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login';
import Home from './components/home';
import Modal from './components/modal';

export default function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
}
