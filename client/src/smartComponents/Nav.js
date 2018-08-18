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
                <header>
  
  <Link className="logo" to="/"><h1 class="logo">M&#8226;Socket</h1></Link>
  
  <a href="#main-menu"
     role="button"
     id="main-menu-toggle"
     class="menu-toggle"
     aria-expanded="false"
     aria-controls="main-menu"
     aria-label="Open main menu">

    <span class="sr-only">Open main menu</span>
    <span class="fa fa-bars" aria-hidden="true"></span>
  </a>
  <nav id="main-menu" role="navigation" class="main-menu" aria-expanded="false" aria-label="Main menu">
    <a href="#main-menu-toggle"
       role="button"
       id="main-menu-close"
       class="menu-close"
       aria-expanded="false"
       aria-controls="main-menu"
       aria-label="Close main menu">

      <span class="sr-only">Close main menu</span>
      <span class="fa fa-close" aria-hidden="true"></span>
    </a>
    <ul>
    <Link to="/"><li>Home</li></Link>
                    {/* <a href="#about"><Link to="/about">About</Link></a> */}
                    {this.props.loggedIn && <Link to="/dashboard"><li>Dashboard</li></Link> }
                    {!this.props.loggedIn && <Link to="/login"><li>Login</li></Link> }
                    {!this.props.loggedIn && <Link to="/signup"><li>Sign Up</li></Link> }
                    <Logout />

    </ul>
  </nav>
  <a href="#main-menu-toggle"
     class="backdrop"
     tabindex="-1"
     aria-hidden="true" hidden></a>
</header>

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