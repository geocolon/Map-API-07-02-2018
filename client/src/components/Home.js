import React from 'react';
import Nav from '../smartComponents/Nav';

const Home = () => {
    return (
        <div>
            <Nav />
            <main className="container">
                <center>
                <h1>
                    WebSocket
                </h1>
                </center>
                <div className="row">
                    <div className="col-12">
                        <h3>What is WebSocket?</h3>
                        <p>A web application that uses Socket.io to generate instant messaging capability. It user authentication with PassportJS, MongoDB, and it’s frontend is React and Redux.</p>
                        <p>Please signup and try it yourself!</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;