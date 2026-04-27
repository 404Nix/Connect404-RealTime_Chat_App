import React from "react";
import { Outlet } from "react-router-dom";
import Title from "./Title";
import Navbar from "./Navbar";

const HomeChatLayout = () => {
    return (
        <>
        <Navbar />
            <div className="grid grid-cols-12 h-screen">
                <aside className="col-span-4">
                    {/* left sidebar — 3/12 = 25% */}
                </aside>
                <main className="col-span-8 shadow-2xl">
            <       Outlet />
                </main>
            </div>
        </>
    );
};

export default HomeChatLayout;
