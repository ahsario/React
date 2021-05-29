import { TextField, FloatingActionButton } from "material-ui"
import ContentAdd from "material-ui/svg-icons/content/add"
import React, { useState } from "react"
import "../styles/index.css"

export const NewChat = ({ chats, setChats }) => {
  const [state, setState] = useState("")
  const handleClick = (message) => {
    setChats([
      ...chats,
      {
        id: chats[chats.length - 1].id + 1,
        name: message,
        messages: [
          { text: "Привет!", sender: "bot" },
          { text: "Как дела?", sender: "bot" },
        ],
      },
    ])
    setState("")
  }

  const handleChange = (event) => {
    setState(event.target.value)
  }

  const handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      // Enter
      setChats([
        ...chats,
        {
          id: chats[chats.length - 1].id + 1,
          name: message,
          messages: [
            { text: "Привет!3", sender: "bot" },
            { text: "Как дела?", sender: "bot" },
          ],
        },
      ])
      setState("")
    }
  }

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <TextField
        name="input"
        fullWidth={true}
        hintText="Введите имя контакта"
        style={{ fontSize: "22px" }}
        onChange={handleChange}
        value={state}
        onKeyUp={(event) => handleKeyUp(event, state)}
      />
      <FloatingActionButton onClick={() => handleClick(state)}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}
