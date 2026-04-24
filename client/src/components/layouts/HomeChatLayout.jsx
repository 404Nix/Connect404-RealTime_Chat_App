import React from "react";
import { Outlet } from "react-router-dom";
import Title from "./Title";

const HomeChatLayout = () => {
    return (
        <>
            <div>HomeChatLayout</div>
            <Outlet />
        </>
    );
};

export default HomeChatLayout;
