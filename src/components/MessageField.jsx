import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import React, { useEffect, useState, useRef, useCallback } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { addMessageAction } from "../store/action"
import { getState } from "../store/selectors"
import { Message } from "./Message"
import "../styles/index.css"

export const MessageField = () => {
  const [input, setInput] = useState("")
  const textInput = useRef()
  useEffect(() => textInput.current.focus(), [])

  const { initialChats, currentChat, name } = useSelector(
    getState,
    shallowEqual,
  )
  const dispatch = useDispatch()

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
      console.log(name, "add")
    }
  }

  const sendMessage = useCallback(
    (message) => {
      dispatch(addMessageAction({ text: message, sender: "me" }))
    },
    [dispatch],
  )

  const botMessage = useCallback(() => {
    dispatch(
      addMessageAction({
        text: "Не приставай ко мне, я робот!",
        sender: "bot",
      }),
    )
  }, [dispatch])
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
