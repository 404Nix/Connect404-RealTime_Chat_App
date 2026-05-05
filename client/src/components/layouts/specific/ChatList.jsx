import React from "react";
import ChatItem from "./ChatItem";

const ChatList = ({
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            chatId: "",
            count: 0,
        },
    ],
    handleDeleteChat,
}) => {
    return (
        <div className="p-4 cursor-pointer">
            {chats.map((chat) => {
                return <ChatItem />;
            })}
        </div>
    );
};

export default ChatList;
