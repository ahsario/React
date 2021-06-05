import { TextField, FloatingActionButton } from "material-ui"
import ContentAdd from "material-ui/svg-icons/content/add"
import React, { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { addChatAction } from "../store/action"
import "../styles/index.css"

export const NewChat = () => {
  const dispatch = useDispatch()
  const addChat = useCallback(
    (addName) => {
      dispatch(addChatAction(addName))
    },
    [dispatch],
  )
  const [state, setState] = useState("")
  const handleClick = (addName) => {
    addChat(addName)
    setState("")
  }

  const handleChange = (event) => {
    setState(event.target.value)
  }

  const handleKeyUp = (event, addName) => {
    if (event.keyCode === 13) {
      addChat(addName)
      setState("")
    }
  }

  return (
    <div style={{ display: "flex", margin: "30px 100px" }}>
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
