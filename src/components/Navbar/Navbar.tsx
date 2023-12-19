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
                            {"$make.sh o_0"}
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
                        <NavLink to={"/my-urls"} className={"nav-item"}>
                            <GlitchedElement text="> my_urls"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/rate"} className={"nav-item"}>
                            <GlitchedElement text="> rate"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;