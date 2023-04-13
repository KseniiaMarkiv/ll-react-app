import BookingForm from './BookingForm';
import '../Reservation.css';
import React, { useReducer } from 'react';

export const initializeTimes = () => {
  return [
    { time: '17:00', isAvailable: true },
    { time: '18:00', isAvailable: true },
    { time: '19:00', isAvailable: true },
    { time: '20:00', isAvailable: true },
    { time: '21:00', isAvailable: true },
    { time: '22:00', isAvailable: true },
  ];
}
export const updateTimes = (state, action) => {
  return initializeTimes();
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className='App'>
      <div className='booking-jumpotron'>
        <img src="./Assets/restaurant.jpg" alt='Photo of restaurant' />
      </div>
      <div className='container booking-container'>
        <h1 className='reserve-header'>Reserve a table</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default BookingPage;