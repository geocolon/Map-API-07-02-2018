import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import MapComponent from './MapComponent';
import {Redirect} from 'react-router-dom';

class MapPage extends React.Component {
    render() {
        if(!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <Nav />
                <MapComponent />
            </div>    
        );
    }
}

const mapStateToProps = state => {
    // console.log('This is the state on Reg page',state)
    return {
   loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(MapPage);