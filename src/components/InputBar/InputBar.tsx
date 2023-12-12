import {Input, ConfigProvider, Button} from "antd";
import React, { useState } from "react";
import ButtonClick from '../Button/ButtonClick';
import './InputBar.css';

const InputBar: React.FC = () => {

    const [inputUrl, setInputUrl] = useState('');
    const [inputShortUrl, setInputShortUrl] = useState('');

    const handleChangeInputUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputUrl(e.currentTarget.value);
    }

    const handleChangeInputShortUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputShortUrl(e.currentTarget.value);
    }

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "Source Code Pro",
                        borderRadiusLG: 16,
                    },
                    components: {
                        Input: {
                            activeShadow: "0 0 0 1px rgba(5, 145, 255, 1)",
                            addonBg: "#FAFAFA",
                        }
                    },
                }}>
                <label htmlFor="myInput">choose url:</label>
                <Input
                    size="large"
                    className="typed"
                    value={inputUrl}
                    onChange={handleChangeInputUrl}
                    placeholder="example: https://my-very-long-url.tech/and-more-data"
                />
                <p>typed: {inputUrl}</p>

                <Input
                    size="large"
                    addonBefore={<b>sh.jus1d.ru/</b>}
                    value={inputShortUrl}
                    onChange={handleChangeInputShortUrl}
                    placeholder="example: my-socials"
                />
                <p>typed: {inputShortUrl}</p>
                <ButtonClick />
            </ConfigProvider>
        </div>
    );
}

export default InputBar;