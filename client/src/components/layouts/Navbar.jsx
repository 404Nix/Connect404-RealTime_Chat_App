import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
    const [profileActive, setProfileActive] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-gray-300 border-b border-gray-800">
            {/* logo */}
            <Link
                to="/"
                className="font-bold text-lg tracking-tight"
            >
                Connect404
            </Link>

            {/* user avatar */}
            <div className="relative">
                <div
                    onClick={() => setProfileActive(!profileActive)}
                    className="w-9 h-9 rounded-full overflow-hidden bg-gray-700 cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                >
                    {user?.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-sm font-semibold bg-blue-600">
                            {user?.name?.[0]?.toUpperCase() || "?"}
                        </div>
                    )}
                </div>

                {/* dropdown */}
                {profileActive && (
                    <div className="absolute right-0 top-12 w-48 bg-gray-200 border border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
                        {/* add profile here */}
                        <div className="text-3xl p-5">Profile here</div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
