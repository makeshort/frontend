import InputBar from "../../components/InputBar/InputBar";
import Navbar from "../../components/Navbar/Navbar";
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="inputs">
                <InputBar />
            </div>
        </div>
    );
}

export default Home;