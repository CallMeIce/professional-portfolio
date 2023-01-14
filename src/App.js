import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
