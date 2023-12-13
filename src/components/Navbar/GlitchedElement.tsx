import React, { useState } from "react";

interface ComponentProps {
    text: string;
}

const GlitchedElement: React.FC<ComponentProps> = (props) => {

    const [text, setText] = useState(props.text);

    const handleMouseEnter = async () => {
        const n: number = text.length;
        let newText: string = getRandomString(n);

        setText(newText);

        for (let i = 0; i < n; i++) {
            newText = replaceCharAtIndex(newText, i, text[i]);
            for (let j = i + 1; j < n; j++) {
                newText = replaceCharAtIndex(newText, j, getRandomChar());
            }
            setText(newText);
            await sleep(50);
        }
        setText(props.text);
    }

    const replaceCharAtIndex = (input: string, idx: number, char: string): string => {
        if (idx < 0 || idx >= input.length) {
            return input;
        }

        return input.substring(0, idx) + char + input.substring(idx + 1);
    }

    const getRandomString = (length: number): string => {
        let s: string = '';

        for (let i = 0; i < length; i++) {
            s += getRandomChar();
        }

        return s;
    }

    const getRandomChar = (): string => {
        let alp = 'abcdefghijklmnopqrstuvwxyz1234567890';
        alp += alp.toUpperCase();

        const idx: number = Math.floor(Math.random() * alp.length);
        return alp[idx];
    }

    const sleep = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div onMouseEnter={handleMouseEnter}>{text}</div>
    );
}

export default GlitchedElement;