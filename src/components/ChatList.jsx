import { List, ListItem } from "material-ui"
import "../styles/index.css"
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble"
import React, { useCallback } from "react"
import { connect } from "react-redux"
import { setCurrentChatAction, deleteCurrentChatAction } from "../store/actions"

const ChatLists = ({
  chats,
  deleteCurrentChatAction,
  setCurrentChatAction,
}) => {
  const setCurrentChat = useCallback(
    (current) => {
      console.log(current)
      setCurrentChatAction(current)
    },
    [setCurrentChatAction],
  )

  const handleContextMenu = useCallback(
    (e, chatId) => {
      e.preventDefault()
      const wilRemove = confirm("удалить чат?")
      wilRemove && deleteCurrentChatAction(chatId)
    },
    [deleteCurrentChatAction],
  )

  const { initialChats, currentChat } = chats
  console.log(initialChats, currentChat, "props")
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

const mapStateToProps = (state) => ({
  chats: state.messageFieldReducer,
})

const mapDispachToProps = (dispatch) => ({
  setCurrentChatAction: (current) => dispatch(setCurrentChatAction(current)),
  deleteCurrentChatAction: (chatId) =>
    dispatch(deleteCurrentChatAction(chatId)),
})

export const ChatList = connect(mapStateToProps, mapDispachToProps)(ChatLists)
