import Navbar from "../../components/Navbar/Navbar";
import React from 'react';
import './Home.css';
import {Button, ConfigProvider, Input} from "antd";
import {HomeTheme} from "../../Config.tsx";

const Home: React.FC = () => {

    const flag = false;

    return (
        <div>
            <Navbar />

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
                                // status={inputUrlStatus}
                                // value={inputUrl}
                                // onChange={handleChangeInputUrl}
                                // onPressEnter={handleEnter}
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
                                // status={inputShortUrlStatus}
                                // value={inputShortUrl}
                                // onChange={handleChangeInputShortUrl}
                                // onPressEnter={handleEnter}
                                placeholder="socials"
                            />
                        </div>

                        <div className={"button-container home-item"}>
                            <Button
                                className={"makesh-button"}
                                type="default"
                                size="large"
                                style={{width: "20vw", height: "5vh"}}
                                // onClick={handleEnter}
                                // disabled={isButtonDisabled}
                            >
                                {"> make!short"}
                            </Button>
                        </div>
                    </div>
                </ConfigProvider>

                <div className={"feedback-container"}>
                    {
                        flag &&
                        <div className={"success"}>
                            {"your shorter url -> https://sh.jus1d/s/socials"}
                        </div>
                    }
                    {
                        !flag &&
                        <div className={"failed"}>
                            {"shorter url '/s/socials' is already taken "}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;