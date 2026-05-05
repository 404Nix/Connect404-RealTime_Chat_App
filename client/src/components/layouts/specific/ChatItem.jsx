import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat = false,
    samesender,
    isOnline,
    newMessagesAlert,
    index=0,
    handleDeleteChat,
}) => {
  return (
    <Link to={`/chat/${_id}`} className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-300 transition ${samesender ? "mt-2" : "mt-4"}`}>
      <div className="relative">
        {/* <img src={avatar[0]} alt={name} className="w-12 h-12 rounded-full object-cover" /> */}
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
    </Link>
  )
}

export default memo(ChatItem)