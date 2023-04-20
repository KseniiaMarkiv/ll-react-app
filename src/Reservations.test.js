import { updateTimes, initializeTimes } from './components/Reservations';
import { render, act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { BookingContext } from './components/Reservations';
import BookingForm from './components/BookingForm'

describe('updateTimes', () => {
  let state;

  beforeEach(() => {
    state = {
      date: new Date(),
      time: '',
      guests: 1,
      occasion: '',
      availableTimes: ['12:00', '1:00', '2:00'],
    };
  });

  it('should set the date, time, and availableTimes when SET_DATE action is dispatched', () => {
    const action = {
      type: 'SET_DATE',
      payload: {
        date: new Date('2023-04-17'),
        availableTimes: ['3:00', '4:00', '5:00'],
      },
    };
    const expected = {
      date: new Date('2023-04-17'),
      time: '',
      guests: 1,
      occasion: '',
      availableTimes: ['3:00', '4:00', '5:00'],
    };
    const result = updateTimes(state, action);
    expect(result).toEqual(expected);
  });

  it('should set the time when SET_TIME action is dispatched', () => {
    const action = {
      type: 'SET_TIME',
      payload: {
        time: '12:00',
      },
    };
    const expected = {
      date: state.date,
      time: '12:00',
      guests: 1,
      occasion: '',
      availableTimes: state.availableTimes,
    };
    const result = updateTimes(state, action);
    expect(result).toEqual(expected);
  });

  it('should set the number of guests when SET_GUESTS action is dispatched', () => {
    const action = {
      type: 'SET_GUESTS',
      payload: {
        guests: 4,
      },
    };
    const expected = {
      date: state.date,
      time: '',
      guests: 4,
      occasion: '',
      availableTimes: state.availableTimes,
    };
    const result = updateTimes(state, action);
    expect(result).toEqual(expected);
  });

  it('should set the occasion when SET_OCCASION action is dispatched', () => {
    const action = {
      type: 'SET_OCCASION',
      payload: {
        occasion: 'Anniversary',
      },
    };
    const expected = {
      date: state.date,
      time: '',
      guests: 1,
      occasion: 'Anniversary',
      availableTimes: state.availableTimes,
    };
    const result = updateTimes(state, action);
    expect(result).toEqual(expected);
  });
});

describe('updateTimes with new update data', () => {
  const initialState = initializeTimes;

  it('should update the step when receiving nextStep action', () => {
    const newState = updateTimes(initialState, { type: 'nextStep' });
    expect(newState.step).toEqual(2);
  });

  it('should update the step when receiving prevStep action', () => {
    const newState = updateTimes(initialState, { type: 'prevStep' });
    expect(newState.step).toEqual(0);
  });

  it('should update the date and availableTimes when receiving SET_DATE action', () => {
    const date = new Date();
    const availableTimes = ['17:00', '18:30', '19:00'];
    const newState = updateTimes(initialState, { type: 'SET_DATE', payload: { date, availableTimes } });
    expect(newState.date).toEqual(date);
    expect(newState.availableTimes).toEqual(availableTimes);
  });

  it('should update the time when receiving SET_TIME action', () => {
    const time = '17:00';
    const newState = updateTimes(initialState, { type: 'SET_TIME', payload: { time } });
    expect(newState.time).toEqual(time);
  });

  it('should update the guests when receiving SET_GUESTS action', () => {
    const guests = 4;
    const newState = updateTimes(initialState, { type: 'SET_GUESTS', payload: { guests } });
    expect(newState.guests).toEqual(guests);
  });

  it('should update the occasion when receiving SET_OCCASION action', () => {
    const occasion = 'Birthday';
    const newState = updateTimes(initialState, { type: 'SET_OCCASION', payload: { occasion } });
    expect(newState.occasion).toEqual(occasion);
  });

  it('should update the first name when receiving SET_FIRST_NAME action', () => {
    const firstName = 'John';
    const newState = updateTimes(initialState, { type: 'SET_FIRST_NAME', payload: { firstName } });
    expect(newState.firstName).toEqual(firstName);
  });

  it('should update the last name when receiving SET_LAST_NAME action', () => {
    const lastName = 'Doe';
    const newState = updateTimes(initialState, { type: 'SET_LAST_NAME', payload: { lastName } });
    expect(newState.lastName).toEqual(lastName);
  });

  it('should update the phone when receiving SET_PHONE action', () => {
    const phone = '1234567890';
    const newState = updateTimes(initialState, { type: 'SET_PHONE', payload: { phone } });
    expect(newState.phone).toEqual(phone);
  });

  it('should update the comment when receiving SET_COMMENT action', () => {
    const comment = 'This is a test comment.';
    const newState = updateTimes(initialState, { type: 'SET_COMMENT', payload: { comment } });
    expect(newState.comment).toEqual(comment);
  });
});

