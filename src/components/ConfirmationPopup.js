import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import '../style.css';

const ConfirmationPopup = () => {
  const booking = useSelector((state) => state.booking);

  return (
    booking.confirmed && (
      <motion.div
        className="confirmation-popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="popup-content">
          <h2>Booking Confirmed!</h2>
          <p>Thank you for booking with us, {booking.name}.</p>
          <p>You have booked {booking.horseName}.</p>
          <p>A calendar invite has been sent to your email: {booking.email}</p>
          <button onClick={() => window.location.reload()}>Close</button>
        </div>
      </motion.div>
    )
  );
};

export default ConfirmationPopup;



