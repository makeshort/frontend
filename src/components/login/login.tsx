import React, {useState} from "react";
import styles from "./Login.module.css";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

const Login: React.FC = () => {

    const [inputLoginValue, setInputLoginValue] = useState("");
    const [inputLoginStatus, setInputLoginStatus] = useState<"" | "warning" | "error" | undefined>("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");
    const [inputPasswordStatus, setInputPasswordStatus] = useState<"" | "warning" | "error" | undefined>("");

    const onChangeInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (isValidEmail(input) || input === "") {
            setInputLoginStatus("");
        } else {
            setInputLoginStatus("error");
        }

        setInputLoginValue(input);
    }

    const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (input.length >= 8 || input === "") {
            setInputPasswordStatus("");
        } else {
            setInputPasswordStatus("error");
        }

        setInputPasswordValue(input);
    }

    const handleLogin = () => {

    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <>
            <div>
                <div className={styles.item}>
                    <Input
                        type={"text"}
                        header={"enter{email} -->"}
                        placeholder={"example@domain.com"}
                        status={inputLoginStatus}
                        value={inputLoginValue}
                        onChange={onChangeInputLogin}
                        onPressEnter={handleLogin}
                        width={"100%"}
                    />
                </div>

                <div className={styles.item}>
                    <Input
                        type={"password"}
                        header={"enter{password} -->"}
                        placeholder={"password"}
                        status={inputPasswordStatus}
                        value={inputPasswordValue}
                        onChange={onChangeInputPassword}
                        onPressEnter={handleLogin}
                        width={"100%"}
                    />
                </div>

                <div className={`${styles.item} ${styles.button}`}>
                    <Button
                        onClick={handleLogin}
                        disabled={inputLoginStatus === "error" || inputPasswordStatus === "error"}
                        text={"--> l0gin"}
                    />
                </div>
            </div>
        </>
    );
}

export default Login;