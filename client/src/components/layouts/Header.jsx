import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Add as AddGroupIcon,
    Group as GroupIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { Tooltip } from "react-tooltip";
import ProfileDialog from "./dialog/ProfileDialog";
import AddGroupDialog from "./dialog/AddGroupDialog";
import SearchDialog from "./dialog/SearchDialog";
import NotificationDialog from "./dialog/NotificationDialog";

//dev
const user = false;
const Header = () => {
    const [profileActive, setProfileActive] = useState(false);
    const [addGroupOpen, setAddGroupOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [notificationActive, setNotificationActive] = useState(false);

    const profileHandler = () => {
        setProfileActive(!profileActive);
    };

    const addGroupOpenHandler = () => {
        setAddGroupOpen(!addGroupOpen);
    };

    const handleMobile = () => {
        setIsMobile(!isMobile);
    };

    const searchHandler = () => {
        setSearchActive(!searchActive);
    };

    const notificationHandler = () => {
        setNotificationActive(!notificationActive);
    }

    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-gray-300 border-b border-gray-800">
            {/* logo */}
            {isMobile ? (
                <button
                    onClick={handleMobile}
                    className="p-1.5 rounded-full hover:bg-gray-400 transition"
                >
                    <MenuIcon fontSize="small" />
                </button>
            ) : (
                <Link to="/" className="font-bold text-lg tracking-tight">
                    Connect404
                </Link>
            )}

            {/* right side icons */}
            <div className="flex items-center gap-2">
                {/* search */}
                <Tooltip
                    anchorSelect="#search-btn"
                    content="Search"
                    place="bottom"
                    style={{
                        backgroundColor: "#1f2937",
                        color: "#e5e7eb",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                        borderRadius: "8px",
                    }}
                />
                <button
                    onClick={searchHandler}
                    id="search-btn"
                    className="p-1.5 rounded-full hover:bg-gray-400 transition"
                >
                    <SearchIcon fontSize="small" />
                </button>

                {/* notification */}
                <Tooltip
                    anchorSelect="#notification-btn"
                    content="Notifications"
                    place="bottom"
                    style={{
                        backgroundColor: "#1f2937",
                        color: "#e5e7eb",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                        borderRadius: "8px",
                    }}
                />
                <button
                    onClick={notificationHandler}
                    id="notification-btn"
                    className="relative p-1.5 rounded-full hover:bg-gray-400 transition"
                >
                    <NotificationsIcon fontSize="small" />
                    {/* notification badge */}
                    {/* <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" /> */}
                </button>

                {/* manage groups */}
                <Tooltip
                    anchorSelect="#group-manager"
                    content="Manage Groups"
                    place="bottom"
                    style={{
                        backgroundColor: "#1f2937",
                        color: "#e5e7eb",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                        borderRadius: "8px",
                    }}
                />
                <Link
                    to="/groups"
                    id="group-manager"
                    className="p-1.5 rounded-full hover:bg-gray-400 transition flex items-center"
                >
                    <GroupIcon fontSize="small" />
                </Link>

                {/* create group */}
                <Tooltip
                    anchorSelect="#Create_Group"
                    content="Create Group"
                    place="bottom"
                    style={{
                        backgroundColor: "#1f2937",
                        color: "#e5e7eb",
                        fontSize: "0.75rem",
                        padding: "2px 6px",
                        borderRadius: "8px",
                    }}
                />
                <button
                    id="Create_Group"
                    onClick={addGroupOpenHandler}
                    className="p-1.5 rounded-full hover:bg-gray-400 transition"
                >
                    <AddGroupIcon fontSize="small" />
                </button>

                {/* user avatar */}
                <div className="relative ml-1">
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
                    <ProfileDialog
                        open={profileActive}
                        onClose={profileHandler}
                    />
                    <AddGroupDialog open={addGroupOpen} onClose={addGroupOpenHandler} />
                    <SearchDialog open={searchActive} onClose={searchHandler} />
                    <NotificationDialog open={notificationActive} onClose={notificationHandler} />
                </div>
            </div>
        </nav>
    );
};

export default Header;
