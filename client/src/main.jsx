import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route path="chat/:id" element={<Chat />} />
                            <Route path="groups" element={<Groups />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>,
);
