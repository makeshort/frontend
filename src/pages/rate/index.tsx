import Navbar from "@/components/navbar/navbar";
import styles from "./rate.module.css";
import React, {useState} from "react";

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

    const getClassNameByStarPosition = (n: number): string => {
        if (isStarActive(n)) {
            return styles.star + " " + styles.active;
        }

        return styles.star;
    }

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    className={getClassNameByStarPosition(i)}
                    onClick={() => setRate(i)}
                    onMouseEnter={() => setSelectedRate(i)}
                    onMouseLeave={() => setSelectedRate(0)}>
                    *
                </span>
            );
        }

        return stars;
    };

    return (
        <div>
            <Navbar/>

            <div className={styles.container}>
                { renderStars() }
            </div>
        </div>
    );
}

export default Rate;