import React from 'react';
import './About.css';
import Navbar from "../../components/Navbar/Navbar.tsx";

const About: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className="about-header">
                {"> ab0ut pag3"}
            </div>
        </div>
    );
}

export default About;