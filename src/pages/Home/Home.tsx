import Navbar from "../../components/Navbar/Navbar";
import React, { useState } from 'react';
import './Home.css';
import { Button, ConfigProvider, Input } from "antd";
import { HomeTheme } from "../../Config.tsx";

interface Response {
    id: string,
    url: string,
    alias: string,
    message: string,
}

const Home: React.FC = () => {

    const [inputUrl, setInputUrl] = useState('');
    const [inputAlias, setInputAlias] = useState('');
    const [inputUrlStatus, setInputUrlStatus] = useState<"" | "warning" | "error" | undefined>('');
    const [inputAliasStatus, setInputAliasStatus] = useState<"" | "warning" | "error" | undefined>('');
    const [isCreateImpossible, setIsCreateImpossible] = useState(true);
    const [createdUrl, setCreatedUrl] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [responseStatusCode, setResponseStatusCode] = useState(0);

    const onChangeInputUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (isValidUrl(input) || input === "") {
            setInputUrlStatus("");
            setIsCreateImpossible(false);
        } else {
            setInputUrlStatus("error");
            setIsCreateImpossible(true);
        }
        setInputUrl(input);
    }

    const onChangeInputAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (isValidPathSegment(input) || input === "") {
            setInputAliasStatus("");

            if (inputUrl == "" || inputUrlStatus != "") {
                setIsCreateImpossible(true);
            } else {
                setIsCreateImpossible(false);
            }
        } else {
            setInputAliasStatus("error");
            setIsCreateImpossible(true);
        }
        setInputAlias(input);
    }

    const onCreateUrl = async () => {
        if (isCreateImpossible) {
            return;
        }

        const headers = new Headers();

        headers.set("Authorization", localStorage.getItem("makeshort_access_token") ?? "")

        const body = inputAlias == "" ? {url: inputUrl} : {url: inputUrl, alias: inputAlias};

        const res = await fetch('https://sh.jus1d.ru/api/url', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        const data: Response = await res.json();

        setCreatedUrl(data.alias === "" ? "" : "sh.jus1d.ru/s/" + data.alias);
        setResponseStatusCode(res.status);
        setResponseMessage(data.message);
    }

    const isValidUrl = (url: string): boolean => {
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)(\S*)?$/;

        return urlPattern.test(url);
    }

    const isValidPathSegment = (pathSegment: string): boolean => {
        const regex = /^[a-zA-Z0-9_-]+$/;

        return regex.test(pathSegment) || pathSegment == "";
    }

    // const sleep = (ms: number): Promise<void> => {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    return (
        <div>
            <Navbar />

            {/*{contextHolder}*/}

            <div className={"home-root"}>
                <ConfigProvider theme={HomeTheme}>
                    <div className={"home-container"}>
                        <div className={"input-header home-item"}>
                            {"enter{url} --> "}
                        </div>

                        <div className={"home-item"}>
                            <Input
                                className={"home-input"}
                                size={"large"}
                                status={inputUrlStatus}
                                value={inputUrl}
                                onChange={onChangeInputUrl}
                                onPressEnter={onCreateUrl}
                                placeholder="https://ohh-my-very-looooooong-link-to-my-socials.io/and-some-more-data/"
                            />
                        </div>

                        <div className={"input-header home-item"}>
                            {"enter{shorter} --> "}
                        </div>

                        <div className={"home-item"}>
                            <Input
                                className={"home-input"}
                                size={"large"}
                                status={inputAliasStatus}
                                value={inputAlias}
                                onChange={onChangeInputAlias}
                                onPressEnter={onCreateUrl}
                                placeholder="socials"
                            />
                        </div>

                        <div className={"button-container home-item"}>
                            <Button
                                className={"makesh-button"}
                                type="default"
                                size="large"
                                style={{width: "20vw", height: "5vh"}}
                                onClick={onCreateUrl}
                                disabled={isCreateImpossible}
                            >
                                {"> make!short"}
                            </Button>
                        </div>
                    </div>
                </ConfigProvider>

                <div className={"feedback-container"}>
                    {
                        responseStatusCode === 201 &&
                        <div className={"success"}>
                            {"your shorter url -> " + createdUrl}
                        </div>
                    }
                    {
                        responseStatusCode !== 201 && responseStatusCode !== 0 &&
                        <div className={"failed"}>
                            {responseMessage}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;