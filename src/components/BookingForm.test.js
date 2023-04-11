import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import BookingPage from './Reservations';
import { initializeTimes, updateTimes } from './Reservations';


test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByLabelText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
  it('should return an array with 6 available times', () => {
    const expected = [
      { time: '17:00', isAvailable: true },
      { time: '18:00', isAvailable: true },
      { time: '19:00', isAvailable: true },
      { time: '20:00', isAvailable: true },
      { time: '21:00', isAvailable: true },
      { time: '22:00', isAvailable: true },
    ];

    expect(initializeTimes()).toEqual(expected);
  });
});

describe('updateTimes', () => {
  it('should return the same state when the date is not provided', () => {
    const state = initializeTimes();
    const action = { type: 'UPDATE_TIMES' };
    const updatedState = updateTimes(state, action);
    expect(updatedState).toEqual(state);
  });
});