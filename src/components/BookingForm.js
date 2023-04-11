import React, { useState } from "react";

function BookingForm(props) {
  const { availableTimes, dispatch } = props;
  
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');

  function handleDateChange(e) {
    e.preventDefault();
    const selectedDate = e.target.value;
    dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDate } });
    setDate(selectedDate);
  }

  function handleTimeChange(e) {
    e.preventDefault();
    setTime(e.target.value);
  }

  function handleGuestsChange(e) {
    e.preventDefault();
    setGuests(e.target.value);
  }

  function handleOccasionChange(e) {
    e.preventDefault();
    setOccasion(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    }
    alert(JSON.stringify(data, null, 1));
  }


  return (
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '10px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input 
              type="date" 
              id="res-date"
              min={new Date().toJSON().slice(0, 10)} max="2023-12-31" 
              value={date} 
              onChange={handleDateChange}  />
        <label htmlFor="res-time">Select time</label>
        <select 
               id="res-time"
               value={time} 
               onChange={handleTimeChange}
               >
          {availableTimes.map((timeSlot) => (
          <option key={timeSlot.time} value={timeSlot.time} disabled={!timeSlot.isAvailable}>
            {timeSlot.time}
          </option>
        ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input 
             type="number" 
             placeholder="1" min="1" max="10" 
             id="guests"
             value={guests} 
             onChange={handleGuestsChange} />
        <label htmlFor="occasion">Occasion</label>
        <select 
             id="occasion"
             value={occasion} 
             onChange={handleOccasionChange} >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" role="button" name="submit-btn" disabled={!date || !time || !guests}>Book table</button>
      </form>
  );
}

export default BookingForm;