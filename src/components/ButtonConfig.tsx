import React, { ReactNode } from "react";
import {ConfigProvider} from "antd";

interface ButtonConfigProps {
    children: ReactNode;
}

const ButtonConfig: React.FC<ButtonConfigProps> = ({children}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Source Code Pro",
                    borderRadiusLG: 16,
                    colorBgContainer: "#191919",
                    colorBorder: "#8FC9FE",
                    colorText: "#8FC9FE",
                    colorTextPlaceholder: "#3e5870",
                },
                components: {
                    Button: {
                        fontWeight: "bold",
                        borderRadius: 16,
                        colorBgContainerDisabled: "transparent",
                        colorTextDisabled: "#3e5870",
                        borderColorDisabled: "#3e5870"
                    }
                },
            }}>
            {children}
        </ConfigProvider>
    );
}

export default ButtonConfig;