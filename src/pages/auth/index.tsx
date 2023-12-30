import Navbar from "@/components/navbar/navbar";
import styles from './Auth.module.css';
import React, {useState} from "react";
import Login from "@/components/login/login";
import Register from "@/components/register/register";

const AuthChoice = {
    "login": <Login />,
    "register": <Register />,
}

const Auth: React.FC = () => {

    const [currentAuthPage, setCurrentAuthPage] = useState<"login" | "register">("login");

    const getClassName = (el: "login" | "register") => {
        if (el === "login") {
            if (currentAuthPage === "login") {
                return `${styles.item} ${styles.active}`;
            }
            return styles.item;
        }

        if (currentAuthPage === "register") {
            return `${styles.item} ${styles.active}`
        }

        return styles.item;
    }

    return (
        <>
            <Navbar />

            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.selectorContainer}>
                        <div className={getClassName("login")}>
                            <span className={styles.text} onClick={() => {setCurrentAuthPage("login")}}>
                                {currentAuthPage === "login" ? "<*> login" : "<> login"}
                            </span>
                        </div>

                        <div className={getClassName("register")}>
                            <span className={styles.text} onClick={() => {setCurrentAuthPage("register")}}>
                                {currentAuthPage === "register" ? "<*> register" : "<> register"}
                            </span>
                        </div>
                    </div>

                    { AuthChoice[currentAuthPage] }
                </div>
            </div>
        </>
    );
}

export default Auth;