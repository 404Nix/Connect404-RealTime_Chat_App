import React from "react";
import ChatItem from "./ChatItem";

const ChatList = ({
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            chatId: "123",
            count: 0,
        },
    ],
    handleDeleteChat,
}) => {
    return (
        <div className="p-4 cursor-pointer">
            {chats.map((chat, index) => {
                const { id, name, avatar, groupChat, members } = chat;

                const newMessagesCount = newMessagesAlert.find(
                    ({ chatId }) => chatId === id,
                );

                const isOnline = members?.some((memberId) =>
                    onlineUsers.includes(memberId),
                );

                return (
                    <ChatItem
                        newMessagesAlert={newMessagesCount}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        _id={id}
                        key={id}
                        index={index}
                        groupChat={groupChat}
                        samesender={chatId === id}
                        handleDeleteChat={handleDeleteChat}
                    />
                );
            })}
        </div>
    );
};

export default ChatList;
