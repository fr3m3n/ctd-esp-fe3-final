import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Components/Card";  // Assuming this is a placeholder and not the actual route component
import Footer from "./Components/Footer";
import Form from "./Components/Form";  // Assuming this is a placeholder and not the actual route component
import Navbar from "./Components/Navbar";
// Import the actual route components if they exist
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { GlobalContextProvider } from "./Components/utils/global.context";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
