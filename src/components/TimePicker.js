import React from 'react';
import '../style.css'; // Update the path

const TimePicker = ({ selectedDate, selectedTime, setSelectedTime }) => {
  const times = [];
  for (let hour = 15; hour <= 23; hour++) {
    times.push(`${hour}:00`);
  }

  return (
    <select 
      name="time" 
      value={selectedTime} 
      onChange={(e) => setSelectedTime(e.target.value)} 
      required
    >
      <option value="">Select Time</option>
      {times.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
};

export default TimePicker;

