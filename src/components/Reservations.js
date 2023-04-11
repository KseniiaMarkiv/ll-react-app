import BookingForm from './BookingForm';
import '../Reservation.css';
import { useState } from 'react';


function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  return (
    <div className='App'>
      <div className='booking-jumpotron'>
        <img src="./Assets/restaurant.jpg" alt='Photo of restaurant' />
      </div>
      <div className='container booking-container'>
        <p className='reserve-header-img'>Booking Page</p>
        <h1 className='reserve-header'>Reserve a table</h1>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      </div>
    </div>
  );
}

export default BookingPage;