import React from "react";

const SearchDialog = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div className="fixed inset-0 z-50" onClick={onClose} />
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none focus:outline-none focus:ring-0 w-full px-4 py-2"
                />
            </div>
        </>
    );
};

export default SearchDialog;
