import React from 'react';
import './Contacts.css';
import Navbar from "../../components/Navbar/Navbar.tsx";

const Contacts: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="contacts-header">
                {"> c0ntacts pag3"}
            </div>
        </div>
    );
}

export default Contacts;