import Contacts from "./pages/Contacts/Contacts";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import React from 'react';

function App() {
  return (
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/contacts" element={<Contacts />} />
      // </Routes>
      <Home />
  );
}

export default App;
