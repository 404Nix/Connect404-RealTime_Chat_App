import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Add as AddGroup,
    Group as GroupIcon,
    Search as SearchIcon,
} from "@mui/icons-material";
import { Tooltip } from "react-tooltip";
import ProfileDialog from "./dialog/ProfileDialog";
import AddGroupDialog from "./dialog/AddGroupDialog";

//dev
const user = false;
const Header = () => {
    const [profileActive, setProfileActive] = useState(false);
    const [addGroupOpen, setAddGroupOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const profileHandler = () => {
        setProfileActive(!profileActive);
    };

    const addGroupOpenHandler = () => {
        setAddGroupOpen(!addGroupOpen);
    };

    const handleMobile = () => {
        setMenuOpen(!menuOpen);
    };

    const searchHandler = () => {

    }

    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-gray-300 border-b border-gray-800">
            {/* logo */}
            <Link to="/" className="font-bold text-lg tracking-tight">
                Connect404
            </Link>

            {/* groups + add group */}
            <div className="flex items-center gap-3">
                <Tooltip
                    anchorSelect="#group-manager"
                    content="Manage Groups"
                    place="left"
                    style={{
                        backgroundColor: "#1f2937",
                        color: "#e5e7eb",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        zIndex: 999,
                    }}
                />
                <Link
                    to="/groups"
                    id="group-manager"
                    className="flex items-center gap-1 font-bold text-lg tracking-tight"
                >
                    <GroupIcon fontSize="small" />
                </Link>
                <Tooltip
                    anchorSelect="#Create_Group"
                    content="Create Group"
                    place="right"
                    style={{
                        backgroundColor: "#1f2937",
                        color: "#e5e7eb",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                        borderRadius: "8px",
                        zIndex: 999,
                    }}
                />
                <button
                    id="Create_Group"
                    onClick={addGroupOpenHandler}
                    className="p-1.5 rounded-full hover:bg-gray-400 transition"
                    title="New Group"
                >
                    <AddGroup fontSize="small" />
                </button>
                <AddGroupDialog
                    open={addGroupOpen}
                    onClose={addGroupOpenHandler}
                />
            </div>

            {/* search */}
            <div className="flex items-center gap-2 bg-gray-200 hover:bg-gray-100 border border-gray-400 rounded-full px-3 py-1.5 transition w-48 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                <SearchIcon
                    fontSize="small"
                    className="text-gray-500 shrink-0"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none w-full"
                />
            </div>

            {/* user avatar */}
            <div className="relative">
                <div
                    onClick={profileHandler}
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
                <ProfileDialog open={profileActive} onClose={profileHandler} />
            </div>
        </nav>
    );
};

export default Header;
