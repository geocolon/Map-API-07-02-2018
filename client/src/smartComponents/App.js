import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshAuthToken } from '../actions/auth';
import MapComponent from './map-page';
import RegistrationPage from './registration-page';
import Logout from './Logout';
import Login from './login-page';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/signup" component={RegistrationPage} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mapdashboard" component={MapComponent} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
