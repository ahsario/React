import { List, ListItem } from "material-ui"
import "../styles/index.css"
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble"
import React, { useCallback } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { setCurrentChatAction, deleteCurrentChatAction } from "../store/action"
import { getState } from "../store/selectors"

export const ChatList = () => {
  const { initialChats, currentChat } = useSelector(getState, shallowEqual)
  const dispatch = useDispatch()
  const setCurrentChat = useCallback(
    (current) => {
      console.log(current)
      dispatch(setCurrentChatAction(current))
    },
    [dispatch],
  )

  const handleContextMenu = useCallback(
    (e, chatId) => {
      e.preventDefault()
      const wilRemove = confirm("удалить чат?")
      wilRemove && dispatch(deleteCurrentChatAction(chatId))
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
            key={chat.id}
            primaryText={chat.name}
            rightIcon={<CommunicationChatBubble />}
            onContextMenu={(e) => handleContextMenu(e, chat.id)}
            onClick={() => setCurrentChat(chat.id)}
          />
        </div>
      ))}
    </List>
  )
}
