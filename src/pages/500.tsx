import styles from "@/styles/error.module.css";
import React from 'react';
import Navbar from "@/components/navbar/navbar";

const Custom500: React.FC = () => {
    return (
        <>
            <Navbar/>

            <div className={styles.error}>
                <div className={styles.errorCode}>
                    {"<!>500"}
                </div>
                <div className={styles.errorText}>
                    {"server is sleeping"}
                </div>
            </div>
        </>
    );
}

export default Custom500;