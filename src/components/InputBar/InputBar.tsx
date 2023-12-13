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
    const [createdUrl, setCreatedUrl] = useState("");

    const handleChangeInputUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value.replace(" ", "");

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
        const input: string = e.currentTarget.value.replace(" ", "");

        if (input.length > 15 || !isValidPathSegment(input)) {
            setInputShortUrlStatus("error");
            setButtonDisabled(true);
        } else {
            setInputShortUrlStatus("");
            setButtonDisabled(false);
        }

        setInputShortUrl(input);
    }

    const handleEnter = async (): Promise<void> => {
        if (isButtonDisabled) {
            return;
        }

        messageApi.open({
            type: 'loading',
            content: 'Action in progress..',

        });

        await callCreateUrl(inputUrl, inputShortUrl);

        messageApi.destroy();
        message.success('Your URL created!');
    }

    const onCopyCreatedUrl = async () => {
        await navigator.clipboard.writeText(createdUrl);

        copyText(createdUrl);

        messageApi.open({
            type: 'success',
            content: 'URL copied!',
        });

        await sleep(2500);

        messageApi.destroy();
    }

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    const callCreateUrl = async (url: string, shorter: string): Promise<string> => {
        await sleep(1);

        console.log(url);
        console.log(shorter);

        const shortUrl: string = "https://sh.jus1d.tu/s/asjdgasi";

        setCreatedUrl(shortUrl);

        return "url";
    }

    const isValidUrl = (url: string): boolean => {
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)(\S*)?$/;

        return urlPattern.test(url);
    }

    const isValidPathSegment = (pathSegment: string): boolean => {
        const regex = /^[a-zA-Z0-9_-]+$/;

        return regex.test(pathSegment) || pathSegment == "";
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
                            activeShadow: "0px 0px 5px rgba(148, 186, 233), 0px 0px 15px rgba(148, 186, 233), 0px 0px 100px rgba(148, 186, 233)",
                            // activeShadow: "0px 0px 30px rgba(148, 186, 233)",
                            errorActiveShadow: "0px 0px 5px rgba(252, 116, 116), 0px 0px 15px rgba(252, 116, 116), 0px 0px 100px rgba(252, 116, 116)",
                            // errorActiveShadow: "0px 0px 30px rgba(252, 116, 116)",
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
                        onClick={handleEnter}
                        disabled={isButtonDisabled}
                    >
                        <b>
                            {"> make!short"}
                        </b>
                    </Button>
                </div>
                <div  className="created-url">
                    { createdUrl != "" &&
                        <div className="copy-button" onClick={onCopyCreatedUrl}>
                            <div>
                                {"your created URL -> " + createdUrl}
                            </div>
                            <div>
                                {"[ cl!ck to copy ]"}
                            </div>
                        </div>
                    }
                </div>
            </ConfigProvider>
        </div>
    );
}

export default InputBar;