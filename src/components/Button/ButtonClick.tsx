import React, {useState} from "react";
import { Button } from "antd";
import {SizeType} from "antd/es/config-provider/SizeContext";
import './ButtonClick.css';

const ButtonClick: React.FC = () => {

    return (
        <Button type="default" size="large">
            <b>
                {/*cl!ck*/}
                make!short
            </b>
        </Button>
    );
}

export default ButtonClick;