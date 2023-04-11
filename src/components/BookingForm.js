import { useState } from "react";
import { useReducer } from 'react';

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");


  function handleSubmit(e) {
    e.preventDefault();
    // dispatch({ type: 'UPDATE_TIMES' });
    const data = [date, time, guests, occasion];
    alert(JSON.stringify(data, null, 1));
  }

  return (
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '10px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input 
              type="date" 
              id="res-date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }} />
        <label htmlFor="res-time">Select time</label>
        <select 
               id="res-time"
               value={time}
               onChange={(e) => {
                setTime(e.target.value);
               }} >
          {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input 
             type="number" 
             placeholder="1" min="1" max="10" 
             id="guests" 
             value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }} />
        <label htmlFor="occasion">Occasion</label>
        <select 
             id="occasion"
             value={occasion}
              onChange={(e) => {
                setOccasion(e.target.value);
              }}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Book table</button>
      </form>
  );
}

export default BookingForm;