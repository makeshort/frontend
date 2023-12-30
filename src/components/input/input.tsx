import styles from "./input.module.css";
import React from "react";

interface Props {
    type: React.HTMLInputTypeAttribute,
    width: string,
    header: string,
    status: "" | "warning" | "error" | undefined,
    value: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onPressEnter: () => void,
}

const Input: React.FC<Props> = (props) => {

    const getHeaderClass = (): string => {
        if (props.status == "error") {
            return styles.header + " " + styles.headerError;
        }

        return styles.header;
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onPressEnter()
        }
    }

    return (
        <>
            <div className={getHeaderClass()}>
                {props.header}
            </div>

            <input
                type={props.type}
                className={props.status === "error" ? styles.inputError : styles.input}
                style={{height: "40px", width: props.width}}
                value={props.value}
                onChange={props.onChange}
                onKeyDown={onKeyDown}
                placeholder={props.placeholder}
            />
        </>
    );
}

export default Input;