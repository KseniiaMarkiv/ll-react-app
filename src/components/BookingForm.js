import React, { useState, useContext } from "react";
import uuid from "react-uuid";
import { fetchAPI, submitAPI } from './api';
import { BookingContext } from './Reservations';


function BookingForm() {

  const { state, dispatch } = useContext(BookingContext);

  const handleDateChange = async (e) => {
    const newDate = new Date(e.target.value);
    const availableTimes = await fetchAPI(newDate);
    dispatch({ type: 'SET_DATE', payload: { date: newDate, availableTimes } });
  };

  const handleTimeChange = (e) => {
    dispatch({ type: 'SET_TIME', payload: { time: e.target.value } });
  };

  const handleGuestsChange = (e) => {
    dispatch({ type: 'SET_GUESTS', payload: { guests: e.target.value } });
  };

  const handleOccasionChange = (e) => {
    dispatch({ type: 'SET_OCCASION', payload: { occasion: e.target.value } });
  };



  function handleSubmit(e) {
    e.preventDefault();
    const data = [
      'Your reservation: ',
      'date: ' + state.date.toJSON().slice(0, 10),
      'time: ' + state.time,
      'guests: ' + state.guests,
      'occasion: ' + state.occasion,
    ]
    alert(JSON.stringify(data, null, 1));
  }


  return (
      <form className="booking-form" onSubmit={handleSubmit} >
        <label className="reserve-label" htmlFor="res-date">Choose date</label>
        <input 
              className="reserve-input" 
              type="date" 
              id="res-date"
              min={new Date().toJSON().slice(0, 10)} max="2023-12-31" 
              value={state.date.toJSON().slice(0, 10)} 
              onChange={handleDateChange}  />
        <label className="reserve-label" htmlFor="res-time">Select time</label>
        <select 
             className="reserve-input"
             id="res-time"
               value={state.time} 
               onChange={handleTimeChange}
               >
          {state.availableTimes.map((time) => (
            <option key={uuid()} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label className="reserve-label" htmlFor="guests">Number of guests</label>
        <input 
              className="reserve-input" 
             type="number" 
             placeholder="1" min="1" max="10" 
             id="guests"
             value={state.guests} 
             onChange={handleGuestsChange} />
        <label className="reserve-label" htmlFor="occasion">Occasion</label>
        <select 
             className="reserve-input"
             id="occasion"
             value={state.occasion} 
             onChange={handleOccasionChange} >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" role="button" name="submit-btn" disabled={!state.date || !state.time || !state.guests}>Book table</button>
      </form>
  );
}

export default BookingForm;