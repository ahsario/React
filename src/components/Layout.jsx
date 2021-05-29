import React from "react"
import { ChatList } from "./ChatList"
import { Header } from "./Header"
import { MessageField } from "./MessageField"
import "../styles/index.css"

export class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="layout">
          <ChatList />
          <MessageField />
        </div>
      </>
    )
  }
}
