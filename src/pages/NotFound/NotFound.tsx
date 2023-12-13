import React from "react";
import './NotFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <div className="text-404">
                {"-> 404"}
            </div>
            <div className="error-text">
                {"l00ks l1ke there is n0 such pag3"}
            </div>
        </div>
    );
}

export default NotFound;