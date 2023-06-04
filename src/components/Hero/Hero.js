import React from 'react';
import './Hero.css';
import BackgroundImg from '../../img/bank-tree.jpeg';

function Hero() {
    const backgroundImageStyle = {
        backgroundImage: `url(${BackgroundImg})`
    };

    return (
        <div className="hero" style={backgroundImageStyle}>
            <div className="hero-content">
                <p className="subtitle">No fees.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    );
}

export default Hero;
