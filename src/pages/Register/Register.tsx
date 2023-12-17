import ButtonConfig from "../../components/ButtonConfig.tsx";
import InputConfig from "../../components/InputConfig.tsx";
import { Button, Input } from "antd";
import React, {useState} from "react";
import './Register.css';

const Register: React.FC = () => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');

    const register = async () => {
        let response = await fetch('https://sh.jus1d.ru/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({email: emailInput,  username: usernameInput, password: passwordInput}),
        });

        let data = await response.json();

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
                    <Button className={"register-button"} onClick={register}>Register</Button>
                </ButtonConfig>
            </div>
        </div>
    );
}

export default Register;