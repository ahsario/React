import { TextField, FloatingActionButton } from "material-ui"
import SendIcon from "material-ui/svg-icons/content/send"
import React from "react"
import { Message } from "./Message"
import "../styles/index.css"

export class MessageField extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  state = {
    messages: this.props.chats[this.props.currentChat - 1].messages,
    input: "",
  }

  componentDidMount() {
    this.textInput.current.focus()
  }

  componentDidUpdate() {
    if (
      this.props.chats[this.props.currentChat - 1].messages[
        this.props.chats[this.props.currentChat - 1].messages.length - 1
      ].sender === "me"
    ) {
      setTimeout(
        () =>
          this.props.setChats(
            [
              ...this.props.chats.filter(
                (chat) => chat.id != this.props.currentChat,
              ),
              {
                id: this.props.currentChat,
                name: this.props.chats[this.props.currentChat - 1].name,
                messages: [
                  ...this.props.chats[this.props.currentChat - 1].messages,
                  { text: "Не приставай ко мне, я робот!", sender: "bot" },
                ],
              },
            ].sort((a, b) => a.id - b.id),
          ),
        1000,
      )
    }
  }

  handleClick = (message) => {
    this.sendMessage(message)
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      // Enter
      this.sendMessage(message)
    }
  }

  sendMessage = (message) => {
    this.props.setChats(
      [
        ...this.props.chats.filter((chat) => chat.id != this.props.currentChat),
        {
          id: this.props.currentChat,
          name: this.props.chats[this.props.currentChat - 1].name,
          messages: [
            ...this.props.chats[this.props.currentChat - 1].messages,
            { text: message, sender: "me" },
          ],
        },
      ].sort((a, b) => a.id - b.id),
    )

    this.setState({
      messages: this.props.chats[this.props.currentChat - 1].messages,
      input: "",
    })
    console.log(this.props.setChats)
  }

  render() {
    const messageElements = this.props.chats[
      this.props.currentChat - 1
    ].messages.map((message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ))

    console.log(this.props)
    return (
      <div className="chat">
        <div className="message-field">{messageElements}</div>
        <div style={{ width: "100%", display: "flex" }}>
          <TextField
            ref={this.textInput}
            name="input"
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
          />
          <FloatingActionButton
            onClick={() => this.handleClick(this.state.input)}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}
