import React, {useState} from "react";
import './Urls.css';
import Navbar from "../../components/Navbar/Navbar.tsx";
import * as Api from "../../api";

const Urls: React.FC = () => {

    return (
        <div>
            <Navbar />

            <div className={"urls-root"}>
                <div className={"urls-error-text"}>
                    <div>
                        {"log1n needed to s33 your urls"}
                    </div>
                    <div>
                        {"s00n..."}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Urls;