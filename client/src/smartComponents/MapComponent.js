import React from "react"
import './MapComponent.css';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');



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