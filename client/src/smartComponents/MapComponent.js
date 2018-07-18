import React from "react"
import './MapComponent.css';
import { connect } from 'react-redux';

class SocketMessage extends React.Component {
    componentDidMount() {
      window.chatEmit();
    }

  render() {
    return (
      <div>
      <div className="mario-chat">
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

const mapStateToProps = state => {
  // console.log('This is the state on Reg page',state)
  return {
 loggedIn: state.auth.currentUser
  }
};

export default connect(mapStateToProps)(SocketMessage);