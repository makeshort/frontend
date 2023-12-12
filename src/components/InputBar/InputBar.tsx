import { Input, ConfigProvider, Button, message } from "antd";
import React, { useState } from "react";
import './InputBar.css';

const InputBar: React.FC = () => {

    const [inputUrl, setInputUrl] = useState('');
    const [inputShortUrl, setInputShortUrl] = useState('');
    const [inputUrlStatus, setInputUrlStatus] = useState<"" | "warning" | "error" | undefined>("");
    const [inputShortUrlStatus, setInputShortUrlStatus] = useState<"" | "warning" | "error" | undefined>("");
    const [messageApi, contextHolder] = message.useMessage();
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const handleChangeInputUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let input = e.currentTarget.value;

        if (isValidUrl(input) || input == "") {
            setInputUrlStatus("");
            setButtonDisabled(false);

            if (input == "") setButtonDisabled(true); // TODO: Make this more convenient

        } else {
            setInputUrlStatus("error");
            setButtonDisabled(true);
        }
        setInputUrl(input);
    }

    const handleChangeInputShortUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let input: string = e.currentTarget.value;

        if (isValidPathSegment(input) || input == "") {
            setInputShortUrlStatus("");
        } else {
            setInputShortUrlStatus("error");
        }
        setInputShortUrl(e.currentTarget.value);
    }

    const handleButtonClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>): Promise<void> => {
        messageApi.open({
                type: 'loading',
                content: 'Action in progress..',

            });

        await sleep(2500);

        messageApi.destroy();
        message.success('Your URL created!');
    }

    const isValidUrl = (url: string): boolean => {
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)(\S*)?$/;

        return urlPattern.test(url);
    }

    const isValidPathSegment = (pathSegment: string): boolean => {
        const regex = /^[a-zA-Z0-9_-]+$/;

        return regex.test(pathSegment);
    }

    const sleep = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div>
            {contextHolder}
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
                        },
                        Button: {
                            colorBgContainerDisabled: "#383838",
                            colorTextDisabled: "#737373",
                            borderColorDisabled: "#424242"
                        }
                    },
                }}>
                <div className="input">
                    <div className="input-header">
                        {"enter url ->"}
                    </div>

                    <Input
                        size="large"
                        style={{width: "50vw", height: "5vh"}}
                        status={inputUrlStatus}
                        value={inputUrl}
                        onChange={handleChangeInputUrl}
                        placeholder="https://ohh-my-very-looooooong-link.tech/and-some-data/"
                    />
                </div>

                <div className="input">
                    <div className="input-header">
                        {"enter shorter ->"}
                    </div>

                    <Input
                        size="large"
                        style={{width: "50vw", height: "5vh"}}
                        status={inputShortUrlStatus}
                        addonBefore={<b>sh.jus1d.ru/s/</b>}
                        value={inputShortUrl}
                        onChange={handleChangeInputShortUrl}
                        placeholder="socials"
                    />
                </div>

                <div className="input">
                    <Button
                        type="default"
                        size="large"
                        style={{width: "20vw", height: "5vh"}}
                        onClick={handleButtonClick}
                        disabled={isButtonDisabled}
                    >
                        <b>
                            {"> make!short"}
                        </b>
                    </Button>
                </div>
            </ConfigProvider>
        </div>
    );
}

export default InputBar;