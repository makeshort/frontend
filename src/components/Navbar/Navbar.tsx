import GlitchedElement from "./GlitchedElement";
import { NavLink } from "react-router-dom";
import React from "react";
import './Navbar.css';

const Navbar: React.FC = () => {

    return (
        <div>
            <nav className="navbar">
                <div className="logo-container">
                    <div className={"logo"}>
                        <b>
                            {"$make.sh᲼᲼᲼᲼o_0"}
                        </b>
                    </div>
                </div>
                <ul className="nav-list">
                    <li>
                        <NavLink to={"/"} className={"nav-item"}>
                            <GlitchedElement text="> home"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={"nav-item"}>
                            <GlitchedElement text="> about"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacts"} className={"nav-item"}>
                            <GlitchedElement text="> contacts"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;