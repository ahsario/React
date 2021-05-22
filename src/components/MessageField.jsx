import React from "react"
import { Message } from "./Message"

export class MessageField extends React.Component {
  state = {
    messages: ["Робот: Привет!", "Робот: Как дела?"],
  }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, "Я: Нормально"] })
  }

  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
      // Остаток от деления на 2
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              "Робот: Не приставай ко мне, я робот!",
            ],
          }),
        1000,
      )
    }
  }

  render() {
    const messageElements = this.state.messages.map((text) => (
      <Message key={text} text={text} />
    ))

    return (
      <div>
        {messageElements}
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    )
  }
}
