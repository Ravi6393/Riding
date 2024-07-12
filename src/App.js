// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import BookingConfirmationModal from './components/BookingConfirmationModal';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/confirmation" element={<BookingConfirmationModal />} />
        </Routes>
    </Router>
);

export default App;





