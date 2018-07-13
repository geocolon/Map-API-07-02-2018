import React from "react"
import './MapComponent.css';

class SocketMessage extends React.Component {
    componentDidMount() {
      window.chatEmit();
    }

  render() {
    return (
      <div>
      <div id="mario-chat">
        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
        <input id="handle" type="text" placeholder="Handle"/>
        <input id="message" type="text" placeholder="Message"/>
        <button id="send">Send</button>
      </div>

      </div>
    )
  }
}

export default SocketMessage;