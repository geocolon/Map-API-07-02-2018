import React from 'react';
import './ChatComp.css';
import { connect } from 'react-redux';

class SocketMessage extends React.Component {
    
  componentDidMount() {
      window.chatEmit();
    }

  render() {
    return (
      <div>
      <div className="main-messenger">
        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
        <p id="handle" value={this.props.loggedIn.username}>You are now logged in as {this.props.loggedIn.username}.</p>
        <textarea id="message" type="textarea" placeholder="Message"/>
        <button id="send">Send Message</button>
      </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
 loggedIn: state.auth.currentUser
  }
};

export default connect(mapStateToProps)(SocketMessage);