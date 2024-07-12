// src/components/BookingForm.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        horse: '',
        date: new Date(),
        time: '',
        name: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Navigate to the confirmation page with form data
        navigate('/confirmation', { state: formData });
    };

    return (
        <div className="booking-form">
            <h2>Book Your Horse Ride</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Horse:
                    <select name="horse" value={formData.horse} onChange={handleChange} required>
                        <option value="">Select a horse</option>
                        <option value="Horse 1">Horse 1</option>
                        <option value="Horse 2">Horse 2</option>
                        <option value="Horse 3">Horse 3</option>
                        <option value="Horse 4">Horse 4</option>
                    </select>
                </label>
                <label>
                    Select Date:
                    <DatePicker
                        selected={formData.date}
                        onChange={(date) => setFormData({ ...formData, date })}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        placeholderText="Select a date"
                        required
                    />
                </label>
                <label>
                    Select Time:
                    <select name="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Select a time</option>
                        {/* Generate time slots from 3 PM to 12 AM */}
                        {Array.from({ length: 10 }, (_, i) => 15 + i).map(hour => (
                            <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <button type="submit" className="button-primary">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
