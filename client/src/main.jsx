import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/auth/ProtectedRoutes.jsx";
import HomeChatLayout from "./components/layouts/HomeChatLayout.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const NotFound = lazy(()=>import("./pages/NotFound.jsx"))

//temp
const user = true;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/login" element={
                            <ProtectedRoutes user={!user} redirect="/"><Login /></ProtectedRoutes>
                        } />
                        <Route path="/" element={<ProtectedRoutes user={user}><App /></ProtectedRoutes>}>
                        <Route element={<HomeChatLayout />}>
                            <Route index element={<Home />} />
                            <Route path="chat/:id" element={<Chat />} />
                        </Route>
                            <Route path="groups" element={<Groups />} />
                        </Route>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>,
);
