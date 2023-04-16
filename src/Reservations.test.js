import { updateTimes } from './components/Reservations';


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

