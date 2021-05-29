import React, { useState } from "react"
import { ChatList } from "./ChatList"
import { Header } from "./Header"
import { Home } from "./Home"
import { MessageField } from "./MessageField"
import "../styles/index.css"
import { NewChat } from "./NewChat"

const initialChats = [
  {
    id: 1,
    name: "Joe",
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
  },
  {
    id: 2,
    name: "Snoop",
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
  },
  {
    id: 3,
    name: "Scott",
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
  },
  {
    id: 4,
    name: "Mark",
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
  },
]

export const Layout = () => {
  const [chats, setChats] = useState(initialChats)
  const [currentChat, setCurrentChat] = useState(1)
  return (
    <>
      <Home />
      <Header />
      <NewChat chats={chats} setChats={setChats} />
      <div className="layout">
        <ChatList chats={chats} setCurrentChat={setCurrentChat} />
        <MessageField
          chats={chats}
          currentChat={currentChat}
          setChats={setChats}
        />
      </div>
    </>
  )
}
