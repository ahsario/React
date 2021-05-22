import { List, ListItem } from "material-ui"
import "../styles/index.css"
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble"
import React from "react"

export class ChatList extends React.Component {
  state = {
    chatList: ["Joe", "Snoop", "Scott", "Mark Tven", "Frodo"],
  }

  render() {
    return (
      <List>
        {this.state.chatList.map((chat) => (
          <ListItem
            key={chat}
            primaryText={chat}
            rightIcon={<CommunicationChatBubble />}
          />
        ))}
      </List>
    )
  }
}
