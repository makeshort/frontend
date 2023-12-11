import React, { useState } from "react";
import { Input, Select } from "antd";
import './InputBar.css';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="sh.jus1d.ru">
        <Option value="sh.jus1d.ru">sh.jus1d.ru</Option>
        <Option value="sh.jus1d.online">sh.jus1d.online</Option>
    </Select>
);

const InputBar: React.FC = () => {

    const [inputUrl, setInputUrl] = useState('');
    const [inputShortUrl, setInputShortUrl] = useState('');

    const handleChangeInputUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputUrl(e.currentTarget.value);
    }

    const handleChangeInputShortUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputShortUrl(e.currentTarget.value);
    }

    return (
        <div>
            <label htmlFor="myInput">choose url:</label>
            <Input
                size="large"
                className="typed"
                value={inputUrl}
                onChange={handleChangeInputUrl}
                placeholder="example: https://my-very-long-url.tech/and-more-data"
            />
            <p>typed: {inputUrl}</p>

            <Input
                size="large"
                addonBefore={<span className="custom-addon"> {selectBefore} </span>}
                value={inputShortUrl}
                onChange={handleChangeInputShortUrl}
                placeholder="example: my-socials"
            />
            <p>typed: {inputShortUrl}</p>
        </div>
    );
}

export default InputBar;