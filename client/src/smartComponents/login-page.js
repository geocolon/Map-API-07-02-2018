import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Login from './Login';
import {Link, Redirect} from 'react-router-dom';

class LoginPage extends React.Component {
    // If we are logged in (which happens automatically when Login
    // is successful) redirect to the user's dashboard
    render(){
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div>
                <Nav /> 
                    <center><h2> Login for App {this.props.loggedIn}</h2></center>
                <Login /><br/>
                <center><Link to="/signup">Not registered? Sign up</Link></center>
            </div>    
        );
    } 
}

const mapStateToProps = state => {
    return {
   loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(LoginPage);