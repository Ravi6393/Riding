// src/components/BookingConfirmationModal.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style.css';

const BookingConfirmationModal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { horse, date, time, name } = location.state || {};

    // Redirect to landing page if no data is found
    if (!location.state) {
        navigate('/');
    }

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Booking Confirmation</h2>
                <p>Thank you, {name}! Your booking has been confirmed.</p>
                <p><strong>Horse:</strong> {horse}</p>
                <p><strong>Date:</strong> {date?.toLocaleDateString()}</p>
                <p><strong>Time:</strong> {time}</p>
                <button className="button-secondary" onClick={handleClose}>Close</button>
            </div>
        </div>
    );
};

export default BookingConfirmationModal;





