// src/components/LandingPage.js

import React from 'react';
import horse1 from '../images/horse1.jpg';
import horse2 from '../images/horse2.jpg';
import horse3 from '../images/horse3.jpg';
import horse4 from '../images/horse4.jpg';
import '../style.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to the Horse Ride Booking System</h1>
            <div className="horse-container">
                <div className="horse">
                    <img src={horse1} alt="Horse 1" />
                    <h3>Horse 1</h3>
                </div>
                <div className="horse">
                    <img src={horse2} alt="Horse 2" />
                    <h3>Horse 2</h3>
                </div>
                <div className="horse">
                    <img src={horse3} alt="Horse 3" />
                    <h3>Horse 3</h3>
                </div>
                <div className="horse">
                    <img src={horse4} alt="Horse 4" />
                    <h3>Horse 4</h3>
                </div>
            </div>
            <button className="button-book-now" onClick={() => window.location.href = '/booking'}>Book Now</button>
        </div>
    );
};

export default LandingPage;







