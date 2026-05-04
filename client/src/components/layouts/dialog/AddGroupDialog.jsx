import { useState } from "react"
import { Close as CloseIcon } from "@mui/icons-material"

const AddGroupDialog = ({ open, onClose }) => {
    if (!open) return null

    return (
        <>
            {/* backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50"
                onClick={onClose}
            />

            {/* dialog */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-2xl shadow-2xl z-50 p-6">
                {/* header */}
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-semibold text-gray-800">New Group</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition"
                    >
                        <CloseIcon fontSize="small" />
                    </button>
                </div>

                {/* form */}
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Group name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <input
                        type="text"
                        placeholder="Add members"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <div className="flex gap-2 mt-2">
                        <button
                            onClick={onClose}
                            className="flex-1 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddGroupDialog;