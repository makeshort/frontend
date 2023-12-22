import ButtonConfig from "../../components/ButtonConfig.tsx";
import InputConfig from "../../components/InputConfig.tsx";
import { Button, Input } from "antd";
import React, {useState} from "react";
import './Login.css';
import * as Api from "../../api";
import { setCookie } from "nookies";

const Login: React.FC = () => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const onSubmit = async () => {
        const tokens = await Api.auth.login({
            email: emailInput,
            password: passwordInput,
        });

        setCookie(null, "_refreshToken", tokens.refresh_token, {
            path: "/",
        });

        localStorage.setItem("access_token", tokens.access_token);
    }

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setEmailInput(value);
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setPasswordInput(value);
    }

    return (
        <div className={"login-container"}>
            <div className={"login-header login-item"}>
                Login Page
            </div>

            <div className={"login-item"}>
                <InputConfig>
                    <Input className={"login-input"} placeholder={"enter email"} value={emailInput}
                           onChange={onEmailChange}/>
                </InputConfig>
            </div>

            <div className={"login-item"}>
                <InputConfig>
                    <Input type={"password"} className={"login-input"} placeholder={"enter password"}
                           value={passwordInput} onChange={onPasswordChange}/>
                </InputConfig>
            </div>

            <div className={"login-item"}>
                <ButtonConfig>
                    <Button className={"login-button"} onClick={onSubmit}>Login</Button>
                </ButtonConfig>
            </div>
        </div>
    );
}

export default Login;