import styles from "./button.module.css";
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
            <button
                className={styles.button + " " + (isPressed ? styles.buttonPressed : "")}
                style={{height: "42px", width: "350px"}}
                onClick={props.onClick}
                disabled={props.disabled}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {props.text}
            </button>
        </>
    );
}

export default Button;