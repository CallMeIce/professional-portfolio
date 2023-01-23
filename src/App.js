import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import About from './components/AboutMe';

import "./App.css";

function App() {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/AboutMe" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
