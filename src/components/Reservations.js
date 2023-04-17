import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking'
import '../Reservation.css';
import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api';

export const BookingContext = React.createContext();

const initializeTimes = {
  step: 1,
  date: new Date(),
  time: '',
  guests: 1,
  occasion: '',
  availableTimes: [],
  firstName: '',
  lastName: '',
  phone: '',
  comment: '',
};

export const updateTimes = (state = initializeTimes, action) => {
  switch (action.type) {
    // for divided form into smaller pieces.
    case 'nextStep':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'prevStep':
      return {
        ...state,
        step: state.step - 1,
      };
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
      case 'SET_FIRST_NAME':
        return {
          ...state,
          firstName: action.payload.firstName,
      };
      case 'SET_LAST_NAME':
        return {
          ...state,
          lastName: action.payload.lastName,
      };
      case 'SET_PHONE':
        return {
          ...state,
          phone: action.payload.phone,
      };
      case 'SET_COMMENT':
        return {
          ...state,
          comment: action.payload.comment,
      };
    default:
      return state;
  }
}


function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    const getAvailableTimes = async () => {
      const availableTimes = await fetchAPI(state.date);
      dispatch({ type: 'SET_DATE', payload: { date: state.date, availableTimes } });
    };
    getAvailableTimes();
  }, [state.date]);

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate('/confirmation');
    }
  };

  return (
    <div className='App'>
      <div className='booking-jumpotron'>
        <img src="./Assets/restaurant.jpg" alt='Photo of restaurant' />
      </div>
      <div className='container booking-container'>
        <BookingContext.Provider value={{ state, dispatch }}>
          <BookingForm submitForm={submitForm} />
        </BookingContext.Provider>
      </div>
    </div>
  );
}

export default BookingPage;



