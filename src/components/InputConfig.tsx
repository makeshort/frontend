import React, { ReactNode } from "react";
import {ConfigProvider} from "antd";

interface InputConfigProps {
    children: ReactNode;
}

const InputConfig: React.FC<InputConfigProps> = ({children}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Source Code Pro",
                    // borderRadiusLG: 36,
                    colorBgContainer: "#191919",
                    colorBorder: "#8FC9FE",
                    // borderRadius: 16,
                    colorText: "#8FC9FE",
                    colorTextPlaceholder: "#3e5870",
                },
                components: {
                    Input: {
                        borderRadius: 16,
                        addonBg: "#FAFAFA",
                        activeShadow: "0px 0px 3px rgba(148, 186, 233), 0px 0px 10px rgba(148, 186, 233), 0px 0px 50px rgba(148, 186, 233)",
                        // activeShadow: "0px 0px 30px rgba(148, 186, 233)",
                        errorActiveShadow: "0px 0px 5px rgba(252, 116, 116), 0px 0px 15px rgba(252, 116, 116), 0px 0px 100px rgba(252, 116, 116)",
                        // errorActiveShadow: "0px 0px 30px rgba(252, 116, 116)",
                        colorBgBase: "#191919"
                    }
                },
            }}>
            {children}
        </ConfigProvider>
    );
}

export default InputConfig;