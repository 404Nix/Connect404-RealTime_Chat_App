import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidden } from "../components/styles/StyledComponents";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidator, registerValidator } from "../utils/validators";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => {
        setIsLogin((prev) => !prev);
        reset();
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(isLogin ? loginValidator : registerValidator),
    });

    const formSubmitHandler = async (data) => {
        if (isLogin) {
            console.log("Login data");

            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log(data);
        } else {
            console.log("register data");

            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log(data);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
                {isLogin ? (
                    <>
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                            Login
                        </h2>
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleSubmit(formSubmitHandler)}
                        >
                            <input
                                {...register("username")}
                                placeholder="Username"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.username.message}
                                </p>
                            )}
                            <input
                                {...register("password")}
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.password.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition mt-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            />
                                        </svg>
                                        Loading...
                                    </span>
                                ) : (
                                    "Login"
                                )}
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
                        <form
                            className="flex flex-col gap-3"
                            onSubmit={handleSubmit(formSubmitHandler)}
                        >
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
                                {...register("name")}
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.name.message}
                                </p>
                            )}
                            <input
                                {...register("username")}
                                placeholder="Username"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.username.message}
                                </p>
                            )}
                            <input
                                {...register("bio")}
                                placeholder="Bio"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            {errors.bio && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.bio.message}
                                </p>
                            )}
                            <input
                                {...register("password")}
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.password.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition mt-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            />
                                        </svg>
                                        Loading...
                                    </span>
                                ) : (
                                    "Register"
                                )}
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
