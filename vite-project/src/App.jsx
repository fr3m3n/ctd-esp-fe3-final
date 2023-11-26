import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { GlobalContext } from "./Components/utils/global.context"; // Import the context

const App = () => {
  const { state } = useContext(GlobalContext); // Access the global context

  return (
    <div className={`App ${state.theme}`}> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
