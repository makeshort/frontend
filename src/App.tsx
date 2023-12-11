import InputBar from "./components/InputBar/InputBar";
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="inputs">
        <InputBar />
      </div>
    </div>
  );
}

export default App;
