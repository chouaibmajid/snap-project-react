import { Avatar } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import "./Chats.css";
function Chats() {
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__Avatar" />
        <div className="chats__search">
          <SearchIcon />
          <input placeholder="Friends" type="text" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>
    </div>
  );
}

export default Chats;
