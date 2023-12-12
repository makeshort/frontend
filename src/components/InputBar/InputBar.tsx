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

        if (isValidUrl(input) || input === "") {
            setInputUrlStatus("");
            setButtonDisabled(false);

            if (input === "") setButtonDisabled(true); // TODO: Make this more convenient

        } else {
            setInputUrlStatus("error");
            setButtonDisabled(true);
        }
        setInputUrl(input);
    }

    const handleChangeInputShortUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let input: string = e.currentTarget.value;

        if (isValidPathSegment(input) || input === "") {
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

    const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
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
                        colorBgContainer: "#191919",
                        colorBorder: "#8FC9FE",
                        colorText: "#8FC9FE",
                        colorTextPlaceholder: "#3e5870",
                    },
                    components: {
                        Input: {
                            addonBg: "#FAFAFA",
                            // activeShadow: "0px 0px 5px rgba(148, 186, 233), 0px 0px 15px rgba(148, 186, 233), 0px 0px 100px rgba(148, 186, 233)",
                            activeShadow: "0px 0px 30px rgba(148, 186, 233)",
                            // errorActiveShadow: "0px 0px 5px rgba(252, 116, 116), 0px 0px 15px rgba(252, 116, 116), 0px 0px 100px rgba(252, 116, 116)",
                            errorActiveShadow: "0px 0px 30px rgba(252, 116, 116)",
                            colorBgBase: "#191919"
                        },
                        Button: {
                            colorBgContainerDisabled: "transparent",
                            colorTextDisabled: "#3e5870",
                            borderColorDisabled: "#3e5870"
                        }
                    },
                }}>
                <div className="input">
                    <div className="input-header">
                        <b>
                            {"enter url ->"}
                        </b>
                    </div>

                    <Input
                        size="large"
                        style={{width: "50vw", height: "5vh"}}
                        status={inputUrlStatus}
                        value={inputUrl}
                        onChange={handleChangeInputUrl}
                        onPressEnter={handleEnter}
                        placeholder="https://ohh-my-very-looooooong-link.tech/and-some-data/"
                    />
                </div>

                <div className="input">
                    <div className="input-header">
                        <b>
                            {"enter shorter ->"}
                        </b>
                    </div>

                    <Input
                        size="large"
                        style={{width: "50vw", height: "5vh"}}
                        status={inputShortUrlStatus}
                        // addonBefore={<b>sh.jus1d.ru/s/</b>}
                        value={inputShortUrl}
                        onChange={handleChangeInputShortUrl}
                        onPressEnter={handleEnter}
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