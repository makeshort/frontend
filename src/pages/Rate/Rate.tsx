import Navbar from "../../components/Navbar/Navbar.tsx";
import React, {useState} from 'react';
import './Rate.css';

const Rate: React.FC = () => {

    const [rate, setRate] = useState(0);
    const [selectedRate, setSelectedRate] = useState(0);

    const isStarActive = (n: number): boolean => {
        if (rate != 0 && selectedRate == 0) {
            return n <= rate;
        }
        if (rate != 0) {
            return n <= selectedRate;
        }
        return n <= rate || n <= selectedRate;
    }

    return (
        <div>
            <Navbar />

            <div className={"rate-container"}>
                <div
                    className={isStarActive(1) ? "rate-star-active" : "rate-star"}
                    onClick={() => setRate(1)}
                    onMouseEnter={() => setSelectedRate(1)}
                    onMouseLeave={() => setSelectedRate(0)}>
                    *
                </div>

                <div
                    className={isStarActive(2) ? "rate-star-active" : "rate-star"}
                    onClick={() => setRate(2)}
                    onMouseEnter={() => setSelectedRate(2)}
                    onMouseLeave={() => setSelectedRate(0)}>
                    *
                </div>

                <div
                    className={isStarActive(3) ? "rate-star-active" : "rate-star"}
                    onClick={() => setRate(3)}
                    onMouseEnter={() => setSelectedRate(3)}
                    onMouseLeave={() => setSelectedRate(0)}>
                    *
                </div>

                <div
                    className={isStarActive(4) ? "rate-star-active" : "rate-star"}
                    onClick={() => setRate(4)}
                    onMouseEnter={() => setSelectedRate(4)}
                    onMouseLeave={() => setSelectedRate(0)}>
                    *
                </div>

                <div
                    className={isStarActive(5) ? "rate-star-active" : "rate-star"}
                    onClick={() => setRate(5)}
                    onMouseEnter={() => setSelectedRate(5)}
                    onMouseLeave={() => setSelectedRate(0)}>
                    *
                </div>
            </div>
            {/*<div className={"confirm-container"}>*/}
            {/*    <ConfigProvider theme={ RateButtonTheme }>*/}
            {/*        <Button*/}
            {/*            className={"rate-confirm-button"}*/}
            {/*            size="large">*/}
            {/*            {"c0nfirm"}*/}
            {/*        </Button>*/}
            {/*    </ConfigProvider>*/}
            {/*</div>*/}
        </div>
    );
}

export default Rate;