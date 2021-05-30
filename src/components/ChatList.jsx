import { List, ListItem } from "material-ui"
import "../styles/index.css"
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble"
import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentChatAction } from "../store/action"

export const ChatList = () => {
  const { initialChats, currentChat } = useSelector((store) => store)
  const dispatch = useDispatch()
  const setCurrentChat = useCallback(
    (current) => {
      dispatch(setCurrentChatAction(current))
    },
    [dispatch],
  )

  return (
    <List>
      {initialChats.map((chat) => (
        <div
          key={chat.id}
          style={{
            backgroundColor: currentChat == chat.id ? "grey" : "white",
          }}
        >
          <ListItem
            primaryText={chat.name}
            rightIcon={<CommunicationChatBubble />}
            onClick={() => setCurrentChat(chat.id)}
          />
        </div>
      ))}
    </List>
  )
}
