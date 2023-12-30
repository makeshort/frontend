import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Home.module.css";
import Input from "@/components/input/input";
import React, {useState} from "react";
import Head from 'next/head';
import Button from "@/components/button/button";

interface Response {
    id: string,
    url: string,
    alias: string,
    message: string,
}

const Home: React.FC = () => {

    const [inputUrlValue, setInputUrlValue] = useState<string>("");
    const [inputUrlStatus, setInputUrlStatus] = useState<"" | "warning" | "error" | undefined>("");
    const [inputAliasValue, setInputAliasValue] = useState<string>("");
    const [inputAliasStatus, setInputAliasStatus] = useState<"" | "warning" | "error" | undefined>("");

    const [createdUrl, setCreatedUrl] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [responseStatusCode, setResponseStatusCode] = useState(0);

    const flag = false;

    const onChangeInputUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (isValidUrl(input) || input === "") {
            setInputUrlStatus("");
        } else {
            setInputUrlStatus("error");
        }
        setInputUrlValue(input);
    }

    const onChangeInputAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value.replace(" ", "");

        if (isValidPathSegment(input) || input === "") {
            setInputAliasStatus("");
        } else {
            setInputAliasStatus("error");
        }
        setInputAliasValue(input);
    }

    const handleCreateUrl = async () => {
        if (inputUrlStatus === "error" || inputAliasStatus === "error") {
            return;
        }

        const headers = new Headers();

        headers.set("Authorization", localStorage.getItem("makeshort_access_token") ?? "")

        const body = inputAliasValue == "" ? {url: inputUrlValue} : {url: inputUrlValue, alias: inputAliasValue};

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

    return (
        <>
            <Head>
                <title>$home | make.sh</title>
                <meta name="description" content="Fast & simple URL shortener"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="../../public/favicon.ico"/>
            </Head>

            <Navbar />

            <div className={styles.body}>
                <div className={styles.inputContainer}>
                    <div className={styles.item}>
                        <Input
                            type={"text"}
                            header={"enter{url} -->"}
                            placeholder={"https://ohh-my-very-looooong-link.tech/and-some-staff-here"}
                            status={inputUrlStatus}
                            value={inputUrlValue}
                            onChange={onChangeInputUrl}
                            onPressEnter={handleCreateUrl}
                            width={"100%"}
                        />
                    </div>

                    <div className={styles.item}>
                        <Input
                            type={"text"}
                            header={"enter{shorter} -->"}
                            placeholder={"socials"}
                            status={inputAliasStatus}
                            value={inputAliasValue}
                            onChange={onChangeInputAlias}
                            onPressEnter={handleCreateUrl}
                            width={"100%"}
                        />
                    </div>

                    <div className={styles.item + " " + styles.confirmButton}>
                        <Button
                            text={"make!short"}
                            disabled={inputUrlStatus === "error" || inputAliasStatus === "error" || inputUrlValue === ""}
                            onClick={handleCreateUrl}
                        />
                    </div>
                </div>

                <div className={styles.feedbackContainer}>
                    {
                        responseStatusCode === 201 &&
                        <div className={styles.feedbackSuccess}>
                            {createdUrl}
                        </div>
                    }
                    {
                        responseStatusCode !== 201 && responseStatusCode !== 0 &&
                        <div className={styles.feedbackError}>
                            {responseStatusCode + ": " + responseMessage}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Home;