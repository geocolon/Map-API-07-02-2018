import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './Nav.css';

export class Logout extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <a id="logout" onClick={() => this.logOut()}>Log out</a>
            );
        }
        return (
            <span>
                {logOutButton}
            </span>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Logout);
