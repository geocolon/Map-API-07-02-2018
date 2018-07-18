import React from "react"
import './MapComponent.css';
import { connect } from 'react-redux';

class SocketMessage extends React.Component {
    componentDidMount() {
      window.chatEmit();
    }

  render() {
    console.log('looking for username',this.props.loggedIn);
    return (
      <div>
      <div className="main-messenger">
        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
        <p id="handle" value={this.props.loggedIn.username}>You are now logged in as {this.props.loggedIn.username}</p>
        <textarea id="message" type="textarea" placeholder="Message"/>
        <button id="send">Send</button>
      </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('Hello man',this.props.loggedIn);
  return {
 loggedIn: state.auth.currentUser
  }
};

export default connect(mapStateToProps)(SocketMessage);