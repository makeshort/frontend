import styles from "@/styles/404.module.css";
import React from 'react';
import Navbar from "@/components/navbar/navbar";

const Custom404: React.FC = () => {
    return (
        <div>
            <Navbar/>

            <div className={styles.error}>
                <div className={styles.errorCode}>
                    {"<>404"}
                </div>
                <div className={styles.errorText}>
                    {"page not found"}
                </div>
            </div>
        </div>
    );
}

export default Custom404;