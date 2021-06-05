import React from "react"
import { ChatList } from "./ChatList"
import { Header } from "./Header"
import { Home } from "./Home"
import { MessageField } from "./MessageField"
import "../styles/index.css"
import { NewChat } from "./NewChat"

export const Layout = () => {
  return (
    <>
      <Home />
      <Header />
      <NewChat />
      <div className="layout">
        <ChatList />
        <MessageField />
      </div>
    </>
  )
}
