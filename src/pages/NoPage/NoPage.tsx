import React from 'react';
import './NoPage.css';

const NoPage: React.FC = () => {
    return (
        <div>
            <div className="text-404">
                {"-> 404"}
            </div>
            <div className="error-text">
                {"looks like there is no such page"}
            </div>
        </div>
    );
}

export default NoPage;