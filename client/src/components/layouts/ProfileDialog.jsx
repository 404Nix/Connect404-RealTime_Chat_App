import React from "react";

const ProfileDialog = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 z-50" onClick={onClose} />
            <div className="absolute right-0 top-12 w-48 bg-gray-200 border border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="text-3xl p-5">Profile here</div>
            </div>
        </>
    );
};

export default ProfileDialog;
