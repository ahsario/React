import PropTypes from "prop-types"
import React from "react"

export class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    return <div>{this.props.text}</div>
  }
}
