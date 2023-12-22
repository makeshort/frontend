import ButtonConfig from "../../components/ButtonConfig.tsx";
import InputConfig from "../../components/InputConfig.tsx";
import { Button, Input } from "antd";
import React, {useState} from "react";
import './Register.css';

import * as Api from "../../api";

const Register: React.FC = () => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');

    const onSubmit = async () => {
        const user = await Api.auth.register({
            email: emailInput,
            password: passwordInput,
            username: usernameInput,
        });

        console.log(user);
    }

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setEmailInput(value);
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setPasswordInput(value);
    }

    const onUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setUsernameInput(value);
    }

    return (
        <div className={"register-container"}>
            <div className={"register-header register-item"}>
                Register Page
            </div>

            <div className={"register-item"}>
                <InputConfig>
                    <Input className={"register-input"} placeholder={"enter email"} value={emailInput}
                           onChange={onEmailChange}/>
                </InputConfig>
            </div>

            <div className={"register-item"}>
                <InputConfig>
                    <Input className={"register-input"} placeholder={"enter username"}
                           value={usernameInput} onChange={onUsernameInput}/>
                </InputConfig>
            </div>

            <div className={"register-item"}>
                <InputConfig>
                    <Input type={"password"} className={"register-input"} placeholder={"enter password"}
                           value={passwordInput} onChange={onPasswordChange}/>
                </InputConfig>
            </div>

            <div className={"register-item"}>
                <ButtonConfig>
                    <Button className={"register-button"} onClick={onSubmit}>Register</Button>
                </ButtonConfig>
            </div>
        </div>
    );
}

export default Register;