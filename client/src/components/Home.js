import React from 'react';
import Nav from '../smartComponents/Nav';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container">
            <h1>
                Home
            </h1>
            </div>
            <Footer />
        </div>
    );
}

export default Home;