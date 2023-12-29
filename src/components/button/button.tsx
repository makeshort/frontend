import { Button as ButtonAntd, ConfigProvider } from "antd";
import styles from "@/styles/Button.module.css";
import React, { useState } from "react";

interface Props {
    onClick: () => void,
    disabled: boolean,
    text: string,
}

const Button: React.FC<Props> = (props) => {

    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <>
            {/*<ConfigProvider*/}
            {/*    theme={{*/}
            {/*        token: {*/}
            {/*            fontFamily: "Source Code Pro",*/}
            {/*            borderRadiusLG: 16,*/}
            {/*            colorBgContainer: "#19191988",*/}
            {/*            colorBorder: "#92BDEC",*/}
            {/*            colorText: "#92BDEC",*/}
            {/*            colorTextPlaceholder: "#3e5870",*/}
            {/*            colorLinkActive: "#fff",*/}
            {/*        },*/}
            {/*        components: {*/}
            {/*            Button: {*/}
            {/*                colorBgContainerDisabled: "transparent",*/}
            {/*                colorTextDisabled: "#3e5870",*/}
            {/*                borderColorDisabled: "#3e5870",*/}
            {/*                colorLinkHover: "#fff",*/}
            {/*                colorPrimaryHover: "#fff",*/}
            {/*            }*/}
            {/*        },*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <ButtonAntd*/}
            {/*        type="default"*/}
            {/*        size="large"*/}
            {/*        style={{height: "42px", width: "350px"}}*/}
            {/*        onClick={props.onClick}*/}
            {/*        disabled={props.disabled}*/}
            {/*    >*/}
            {/*        {props.text}*/}
            {/*    </ButtonAntd>*/}
            {/*</ConfigProvider>*/}

            <button
                className={styles.button + " " + (isPressed ? styles.buttonPressed : "")}
                style={{height: "42px", width: "350px"}}
                onClick={props.onClick}
                disabled={props.disabled}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                make!short</button>
        </>
    );
}

export default Button;