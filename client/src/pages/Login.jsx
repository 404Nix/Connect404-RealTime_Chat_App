import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidden } from "../components/styles/StyledComponents";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin((prev) => !prev);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
                {isLogin ? (
                    <>
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                            Login
                        </h2>
                        <form className="flex flex-col gap-4">
                            <input
                                required
                                type="text"
                                placeholder="Username"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition mt-1 cursor-pointer"
                            >
                                Login
                            </button>
                            <p className="text-center text-sm text-gray-400">
                                OR
                            </p>
                            <button
                                type="button"
                                onClick={toggleLogin}
                                className="w-full text-sm text-purple-600 hover:text-purple-800 transition cursor-pointer"
                            >
                                Don't have an account? Register
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                            Register
                        </h2>
                        <form className="flex flex-col gap-3">
                            <div className="relative w-28 h-28 mx-auto mb-2">
                                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                                    {/* dummy image */}
                                    <img
                                        src="https://images.pexels.com/photos/37149787/pexels-photo-37149787.jpeg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <label className="absolute bottom-0 right-0 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 cursor-pointer transition">
                                    <CameraAltIcon
                                        style={{ fontSize: "1.1rem" }}
                                    />
                                    <VisuallyHidden type="file" />
                                </label>
                            </div>

                            <input
                                required
                                type="text"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Username"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Bio"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition mt-1 cursor-pointer"
                            >
                                Register
                            </button>
                            <p className="text-center text-sm text-gray-400">
                                OR
                            </p>
                            <button
                                type="button"
                                onClick={toggleLogin}
                                className="w-full text-sm text-purple-600 hover:text-purple-800 transition cursor-pointer"
                            >
                                Already have an account? Login
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
