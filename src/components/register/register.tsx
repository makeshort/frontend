import React, {useState} from "react";
import styles from "./Register.module.css";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

const Login: React.FC = () => {

    const [inputLoginValue, setInputLoginValue] = useState("");
    const [inputUsernameValue, setInputUsernameValue] = useState("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");
    const [inputLoginStatus, setInputLoginStatus] = useState<"" | "warning" | "error" | undefined>("");
    const [inputUsernameStatus, setInputUsernameStatus] = useState<"" | "warning" | "error" | undefined>("");
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

    const onChangeInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (input.length >= 5 || input === "") {
            setInputUsernameStatus("");
        } else {
            setInputUsernameStatus("error");
        }

        setInputUsernameValue(input);
    }

    const handleRegister = () => {

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
                        onPressEnter={handleRegister}
                        width={"100%"}
                    />
                </div>

                <div className={styles.item}>
                    <Input
                        type={"text"}
                        header={"enter{username} -->"}
                        placeholder={"clinnex"}
                        status={inputUsernameStatus}
                        value={inputUsernameValue}
                        onChange={onChangeInputUsername}
                        onPressEnter={handleRegister}
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
                        onPressEnter={handleRegister}
                        width={"100%"}
                    />
                </div>

                <div className={`${styles.item} ${styles.button}`}>
                    <Button
                        onClick={handleRegister}
                        disabled={inputLoginStatus === "error" || inputUsernameStatus === "error" || inputPasswordStatus === "error"}
                        text={"--> r3gister"}
                    />
                </div>
            </div>
        </>
    );
}

export default Login;