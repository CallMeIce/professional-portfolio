import { Routes, Route } from "react-router-dom";
// import { Route } from '@mui/icons-material';
// import { Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import React from "react";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
