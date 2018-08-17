import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Logout from '../smartComponents/Logout';


// import Logout from '../containers/Logout';
import './Nav.css';

class Nav extends React.Component {
    render(){
        if (this.props.loggedIn) {
            // document.getElementsByClassName("login-status").style.display="none";
        }
        return( 
            <div className="header">
                <div className="mobile-nav-space"></div>
                <nav>

                <Link className="logo" to="/">M&#8226;Socket</Link>
                <div className="header-right">
                    <Link className="login-status" to="/">Home</Link>
                    {/* <a href="#about"><Link to="/about">About</Link></a> */}
                    {this.props.loggedIn && <Link to="/dashboard">Dashboard</Link> }
                    {!this.props.loggedIn && <Link to="/login">Login</Link> }
                    {!this.props.loggedIn && <Link to="/signup">Sign Up</Link> }
                    <Logout />
                </div>


                {/* <button className="hamburger">
                </button>
                <ul className="topnav">
                    <li><Logout /></li>
                    {!this.props.loggedIn && <li className="login-status"><Link to="/signup">Sign Up</Link></li> }
                    {!this.props.loggedIn && <li className="login-status"><Link to="/login">Login</Link></li> }
                    <li><Link to="/about">About</Link></li>
                    {this.props.loggedIn && <li className="login-status"><Link to="/dashboard">Map Dashboard</Link></li>}
                    <li><Link to="/">Home</Link></li>
                </ul> */}
                
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
   loggedIn: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(Nav)