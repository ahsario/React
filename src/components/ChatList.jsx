import { List, ListItem } from "material-ui"
import "../styles/index.css"
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble"
import React from "react"

export const ChatList = ({ chats, setCurrentChat }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem
          key={chat.id}
          primaryText={chat.name}
          rightIcon={<CommunicationChatBubble />}
          onClick={() => setCurrentChat(chat.id)}
        />
      ))}
    </List>
  )
}
