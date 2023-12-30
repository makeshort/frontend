import GlitchedText from "@/components/glitchedText/glitchedText";
import styles from "./Navbar.module.css";
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <b>
                            {"$make.sh"}
                        </b>
                    </div>
                </div>

                <ul className={styles.navList}>
                    <li>
                        <a href={"/"} className={styles.navItem}>
                            <GlitchedText text=">home"/>
                        </a>
                    </li>
                    <li>
                        <a href={"/dashboard"} className={styles.navItem}>
                        <GlitchedText text=">dashboard"/>
                        </a>
                    </li>
                    <li>
                        <a href={"/rate"} className={styles.navItem}>
                            <GlitchedText text=">rate"/>
                        </a>
                    </li>
                </ul>

                <div className={styles.authContainer}>
                    <a href={"/auth"} className={styles.auth}>
                        {"--> {auth}"}
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;