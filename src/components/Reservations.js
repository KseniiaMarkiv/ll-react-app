import BookingForm from './BookingForm';
import '../Reservation.css';
import React, { useEffect, useReducer } from 'react';
import { fetchAPI, submitAPI } from './api';
export const BookingContext = React.createContext();



const initializeTimes = {
  date: new Date(),
  time: '',
  guests: 1,
  occasion: '',
  availableTimes: [],
};


export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload.date,
        time: '',
        availableTimes: action.payload.availableTimes,
      };
    case 'SET_TIME':
      return {
        ...state,
        time: action.payload.time,
      };
      case 'SET_GUESTS':
        return {
          ...state,
          guests: action.payload.guests,
        };
      case 'SET_OCCASION':
        return {
          ...state,
          occasion: action.payload.occasion,
        };
    default:
      return state;
  }
}


function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    console.log('Effect ran!', state);
  }, [state]);
  useEffect(() => {
    const getAvailableTimes = async () => {
      const availableTimes = await fetchAPI(state.date);
      dispatch({ type: 'SET_DATE', payload: { date: state.date, availableTimes } });
    };
    getAvailableTimes();
  }, [state.date]);

  return (
    <div className='App'>
      <div className='booking-jumpotron'>
        <img src="./Assets/restaurant.jpg" alt='Photo of restaurant' />
      </div>
      <div className='container booking-container'>
        <h1 className='reserve-header'>Reserve a table</h1>
        <BookingContext.Provider value={{ state, dispatch }}>
          <BookingForm />
        </BookingContext.Provider>
      </div>
    </div>
  );
}

export default BookingPage;



