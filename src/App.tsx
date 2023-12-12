import InputBar from "./components/InputBar/InputBar";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/About/About";
import NoPage from './pages/NoPage/NoPage';
import React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <div className="inputs">
    //     <InputBar />
    //   </div>
    // </div>
      <AboutPage />
  );
}

export default App;
