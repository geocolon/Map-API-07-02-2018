import React from 'react';
import Nav from '../smartComponents/Nav';
import './Home.css';
import '../index.css'

const Home = () => {
    return (
        <div>
            <Nav />
            <img className="image-style" src="./rawpixel-651370-unsplash.jpg" alt="Woman holding cell phone"/>

            <main className="container">
                <div className="row">

                    <div className="col-12">
                        <h3>What is WebSocket</h3>
                        <p>WebSockets are an advanced technology that makes it possible to open an interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.</p>
                        <h3>What is M&#8226;Socket</h3>
                        <p>A simple web application that uses Socket.io to generate instant messaging capability. It user authentication with PassportJS, MongoDB, and it’s frontend is React and Redux.</p>
                        <p>Please sign up and try it yourself!</p>
                    </div>
                    </div>   
                <div className="row">
                    <div className="col-12">
                        <h3>Socket.io</h3>
                        <p>Socket.io pushed data to clients that gets represented as real-time counters, charts or logs. From Microsoft Office, Yammer, Zendesk, Trello... to hackathon winners and little startups. One of the most powerful JavaScript frameworks on GitHub, and most depended-upon npm module.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;