import BookingForm from './BookingForm';
import '../Reservation.css';



function BookingPage() {
  return (
    <div className='App'>
      <div className='booking-jumpotron'>
        <img src="./Assets/restaurant.jpg" alt='Photo of restaurant' />
      </div>
      <div className='container booking-container'>
        <p className='reserve-header-img'>Booking Page</p>
        <h1 className='reserve-header'>Reserve a table</h1>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookingPage;