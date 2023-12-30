import GlitchedText from "@/components/glitchedText/glitchedText";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import React from 'react';

const Navbar: React.FC = () => {
    const router = useRouter();

    const isHomePage = router.pathname === '/';
    const isDashboardPage = router.pathname === '/dashboard'
    const isRatePage = router.pathname === '/rate';
    const isAuthPage = router.pathname === '/auth';

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
                        <a href={"/"} className={styles.navItem + (isHomePage ? ` ${styles.current}` : "")}>
                            <GlitchedText text=">home"/>
                        </a>
                    </li>
                    <li>
                        <a href={"/dashboard"} className={styles.navItem + (isDashboardPage ? ` ${styles.current}` : "")}>
                            <GlitchedText text=">dashboard"/>
                        </a>
                    </li>
                    <li>
                        <a href={"/rate"} className={styles.navItem + (isRatePage ? ` ${styles.current}` : "")}>
                            <GlitchedText text=">rate"/>
                        </a>
                    </li>
                </ul>

                <div className={styles.authContainer}>
                    <a href={"/auth"} className={styles.auth + (isAuthPage ? ` ${styles.current}` : "")}>
                        {"--> {auth}"}
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;