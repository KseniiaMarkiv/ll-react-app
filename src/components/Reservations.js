import BookingForm from './BookingForm';
import '../Reservation.css';
import React, { useEffect, useReducer, createContext, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api';

export const BookingContext = createContext();

const initializeTimes = {
  step: 1,
  date: new Date(),
  time: '',
  guests: '',
  occasion: '',
  availableTimes: [],
  firstName: '',
  lastName: '',
  phone: '',
  comment: '',
};

export const updateTimes = (state = initializeTimes, action) => {
  switch (action.type) {
    case 'nextStep':
      return { ...state, step: state.step + 1 };
    case 'prevStep':
      return { ...state, step: state.step - 1 };
    case 'SET_DATE':
      const { date, availableTimes } = action.payload;
      return { ...state, date, time: '', availableTimes };
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
    case 'SET_TIME':
    case 'SET_GUESTS':
    case 'SET_OCCASION':
    case 'SET_PHONE':
    case 'SET_COMMENT':
      return { ...state, [action.type.split('_')[1].toLowerCase()]: action.payload[action.type.split('_')[1].toLowerCase()] };
    default:
      return state;
  }
};


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

  const submitForm = useCallback(async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate('/confirmation');
    }
  }, [navigate]);

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



