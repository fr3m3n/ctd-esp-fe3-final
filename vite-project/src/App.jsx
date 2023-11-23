
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/dentist/:id" element={<div>Detail</div>} />
        <Route path="/favs" element={<div>Favs</div>} />
      </Routes>
    </div>
  );
};

export default App;
