import ButtonConfig from "../../components/ButtonConfig.tsx";
import InputConfig from "../../components/InputConfig.tsx";
import { Button, Input } from "antd";
import React, {useState} from "react";
import './Login.css';

interface TokenPair {
    access_token: string,
    refresh_token: string,
}

const Login: React.FC = () => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const login = async () => {
        const response = await fetch('https://sh.jus1d.ru/api/auth/session', {
            method: 'POST',
            body: JSON.stringify({email: emailInput,  password: passwordInput}),
        });

        const data: TokenPair = await response.json();

        document.cookie = `_refreshToken=${data.refresh_token}; expires=` + new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString();
        localStorage.setItem("makeshort_access_token", data.access_token);

        console.log(data);
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
                    <Button className={"login-button"} onClick={login}>Login</Button>
                </ButtonConfig>
            </div>
        </div>
    );
}

export default Login;