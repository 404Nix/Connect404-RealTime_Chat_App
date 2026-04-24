import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header";
import Title from "./components/layouts/Title";

const App = () => {
    return (
        <>
            <Title />
            <Outlet />
        </>
    );
};

export default App;
