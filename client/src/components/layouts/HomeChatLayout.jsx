import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Title from "./Title";

import Header from "./Header";

const HomeChatLayout = () => {
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
                <aside
                    className={`md:block md:col-span-4 md:h-screen bg-blue-500 ${id ? "hidden" : "block"}`}
                >
                    {/* when user clicks a contact */}
                    <Link to="/chat/123">UserList</Link>
                </aside>
                <main
                    className={`md:block md:col-span-8 shadow-2xl ${id ? "block" : "hidden"}`}
                >
                    {/* back button — mobile only */}
                    <Link to="/" className="md:hidden">
                        ← Back
                    </Link>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default HomeChatLayout;
