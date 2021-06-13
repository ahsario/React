import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import React, { useEffect, useState, useRef, useCallback } from "react"
import { connect } from "react-redux"
import { addMessageAction } from "../store/actions"
import { Message } from "./Message"
import "../styles/index.css"

const MessageFields = ({ chats, addMessageAction }) => {
  const [input, setInput] = useState("")
  const textInput = useRef()
  useEffect(() => textInput.current.focus(), [])

  const { initialChats, currentChat } = chats

  useEffect(() => {
    if (
      initialChats[currentChat - 1].messages[
        initialChats[currentChat - 1].messages.length - 1
      ].sender === "me"
    ) {
      setTimeout(() => botMessage(), 1000)
    }
  })

  const handleClick = (message) => {
    sendMessage(message)
    setInput("")
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      sendMessage(message)
      setInput("")
      console.log(initialChats, "add")
    }
  }

  const sendMessage = useCallback(
    (message) => {
      addMessageAction({ text: message, sender: "me" })
    },
    [addMessageAction],
  )

  const botMessage = useCallback(() => {
    addMessageAction({
      text: "Не приставай ко мне, я робот!",
      sender: "bot",
    })
  }, [addMessageAction])

  const messageElements = initialChats[currentChat - 1].messages.map(
    (message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ),
  )

  return (
    <div className="chat">
      <div className="message-field">{messageElements}</div>
      <div style={{ width: "100%", display: "flex", marginTop: "15px" }}>
        <TextField
          ref={textInput}
          name="input"
          fullWidth={true}
          hintText="Введите сообщение"
          style={{ fontSize: "22px" }}
          onChange={handleChange}
          value={input}
          onKeyUp={(event) => handleKeyUp(event, input)}
        />
        <FloatingActionButton onClick={() => handleClick(input)}>
          <SendIcon />
        </FloatingActionButton>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  chats: state.messageFieldReducer,
})

const mapDispachToProps = (dispatch) => ({
  addMessageAction: (message) => dispatch(addMessageAction(message)),
})

export const MessageField = connect(
  mapStateToProps,
  mapDispachToProps,
)(MessageFields)
