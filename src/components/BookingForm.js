import React, { useContext, useCallback, useMemo } from "react";
import uuid from "react-uuid";
import { fetchAPI, submitAPI } from './api';
import { BookingContext } from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';

const phoneRegex = /^(?:\+?\d{10}|\+?\d{3}-\d{3}-\d{4})$/;
const eventHandlers = [
  { name: 'handleTimeChange', type: 'SET_TIME', data: 'time' },
  { name: 'handleGuestsChange', type: 'SET_GUESTS', data: 'guests' },
  { name: 'handleOccasionChange', type: 'SET_OCCASION', data: 'occasion' },
  { name: 'handleNextStep', type: 'nextStep', data: 'step' },
  { name: 'handlePrevStep', type: 'prevStep', data: 'step' },
  { name: 'handleFirstNameChange', type: 'SET_FIRST_NAME', data: 'firstName' },
  { name: 'handleLastNameChange', type: 'SET_LAST_NAME', data: 'lastName' },
  { name: 'handlePhoneChange', type: 'SET_PHONE', data: 'phone' },
  { name: 'handleCommentChange', type: 'SET_COMMENT', data: 'comment' },
];
const actualDate = new Date()
const eoYear = new Date(actualDate.getFullYear(),12,0)

function BookingForm(props) {
  const { submitForm } = props;
  const { state, dispatch } = useContext(BookingContext);
  // all given data
  const formattedDate = useMemo(() => {
    return state.date.toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    });
  }, [state.date]);
  
  const data = useMemo(() => {
    return [
      state.guests + ' guest(s)',
      formattedDate,
      state.time,
    ];
  }, [state.guests, formattedDate, state.time]);
  
  const allData = useMemo(() => {
    return [
    state.firstName + ' ' + state.lastName + ',',
    state.phone,
    state.guests + ' guests',
    formattedDate,
    state.time,
  ]
}, [state.firstName, state.lastName, state.phone, state.guests, formattedDate, state.time]);

const submitData = [{
  guests: state.guests,
  date: formattedDate,
  time: state.time,
  occasion: state.occasion,
  firstName: state.firstName,
  lastName: state.lastName,
  phone: state.phone,
  comment: state.comment,
}]
const createHandler = useCallback((type, data) => {
  return (e) => {
    e.preventDefault();
    dispatch({ type, payload: { [data]: e.target.value } });
  }
}, [dispatch]);

const eventHandlerMap = {};
eventHandlers.forEach(({ name, type, data }) => {
  eventHandlerMap[name] = createHandler(type, data);
});

// END all given data

 const handleDateChange = useCallback(async (e) => {
    e.preventDefault();
    const newDate = new Date(e.target.value);
    const availableTimes = await fetchAPI(newDate);
    dispatch({ type: 'SET_DATE', payload: { date: newDate, availableTimes } });
  }, [dispatch]);

const handleSubmit = (e) => {
  e.preventDefault();
  submitForm(submitData);
  console.table('Form submitted:' + " " + JSON.stringify(submitData, null, 1));
};

  return (
    <section>
      {state.step === 1 && (
        <div>
          <h1 className='reserve-header'>Reserve a table</h1>
          <form className="booking-form" onSubmit={eventHandlerMap.handleNextStep} >
            <div className="booking-div">
              <label className="reserve-label" htmlFor="res-date">
                Choose date*
                {!state.date ? <span className="required-error">Required </span> : ''}
                </label>
              <input 
                    className="reserve-input" 
                    type="date" 
                    id="res-date"
                    min={new Date().toJSON().slice(0, 10)} max="2024-12-31"
                    value={state.date.toJSON().slice(0, 10)} 
                    onChange={handleDateChange} 
                    />
            </div>
            <div className="booking-div">
            <label className="reserve-label" htmlFor="res-time">
              Select time*
              {!state.time ? <span className="required-error">Required </span> : ''}
            </label>
            <select 
                className="reserve-input"
                id="res-time"
                  value={state.time} 
                  onChange={eventHandlerMap.handleTimeChange}
                  >
              {state.availableTimes.map((time) => (
                <option key={uuid()} value={time}>
                  {time}
                </option>
              ))}
            </select>
            </div>
            <div className='required-div booking-div'>
              <label className="reserve-label" htmlFor="guests">Number of guests* {!state.guests ? <span className="required-error">Required </span> : ''}</label>
              <input 
                  className="reserve-input" 
                  type="number" 
                  placeholder="1" min="1" max="10" 
                  id="guests"
                  value={state.guests} 
                  onChange={eventHandlerMap.handleGuestsChange}
                  required />
              <div className="state-error">{state.guests == 0 ? 'Guests cannot be less than 1' : ''}</div>
              <div className="state-error">{state.guests > 10 ? 'Guests can be a maximum of 10' : ''}</div>
            </div>
            <div className="booking-div">
              <label className="reserve-label" htmlFor="occasion">Occasion</label>
              <select 
                  className="reserve-input"
                  id="occasion"
                  value={state.occasion} 
                  onChange={eventHandlerMap.handleOccasionChange} >
                  <option>none</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
            </div>
            <button type="submit" aria-label="Submit the first step form" role="button" name="book-btn" disabled={!state.date || !state.time || !state.guests || state.guests < 1 || state.guests > 10 }>Book table</button>
          </form>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h1 className='reserve-header'>Your reservation:</h1>
          <form className="booking-form" onSubmit={eventHandlerMap.handleNextStep}>
            <article className="booking-text-top">
            {data.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </article>
            <div className="booking-div">
              <label className="reserve-label" htmlFor="firstName">
                First Name*
                {!state.firstName ? <span className="required-error">Required </span> : ''}
              </label>
              <input 
                  className="reserve-input"
                  type="text" 
                  id="firstName"
                  placeholder="your First name" minLength={1} maxLength={50}
                  value={state.firstName} 
                  onChange={eventHandlerMap.handleFirstNameChange}
                  required />
              <div className="state-error">{state.firstName.length < 1 ? 'First Name cannot be less than 1' : ''}</div>
              <div className="state-error">{state.firstName.length > 10 ? 'First Name can be a maximum of 50' : ''}</div>
            </div>
            <div className="booking-div">
              <label className="reserve-label" htmlFor="lastName">
                Last Name*
                {!state.lastName ? <span className="required-error">Required </span> : ''}
              </label>
              <input 
                  className="reserve-input"
                  type="text" 
                  id="lastName" 
                  placeholder="your Last name" minLength={3} maxLength={50}
                  value={state.lastName} 
                  onChange={eventHandlerMap.handleLastNameChange}
                  required />
              <div className="state-error">{state.lastName.length < 3 ? 'Last Name cannot be less than 3' : ''}</div>
              <div className="state-error">{state.lastName.length > 10 ? 'Last Name can be a maximum of 50' : ''}</div>
            </div>
            <div className="booking-div">
              <label className="reserve-label" htmlFor="phone">
                Phone*
                {!state.phone ? <span className="required-error">Required </span> : ''}
              </label>
              <input 
                  className="reserve-input"
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+1233334444 or +123-333-4444" 
                  value={state.phone} 
                  onChange={eventHandlerMap.handlePhoneChange} 
                  pattern="^(?:\+?\d{10}|\+?\d{3}-\d{3}-\d{4})$"
                  required />
              <div className="state-error" style={{ display: (!phoneRegex.test(state.phone)) ? 'flex' : 'none', paddingBottom: '4px' }}>
                {!phoneRegex.test(state.phone) && 'Please provide a valid phone number.'}
              </div>
              <div className="state-error" style={{ display: (/^\+?\d{11,}$/.test(state.phone)) ? 'flex' : 'none' }}>
                {/^\+?\d{11,}$/.test(state.phone) && 'Enter 10 digits phone number.'}
              </div>
            </div>
            <div className="booking-div">
              <label className="reserve-label" htmlFor="comment">Additional comment:</label>
              <textarea className="additional-comment" id="comment" rows="4" placeholder='Additional comment' value={state.comment} onChange={eventHandlerMap.handleCommentChange}></textarea>
            </div>
            <p className="reserve-note-one"> Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</p>
            <div className="btns-container">
              <button type="button" aria-label="Back to the first step form" role="button" name="checkout-btn" onClick={eventHandlerMap.handlePrevStep}>Back</button>
              <button type="submit" aria-label="Submit the second step form" role="button" name="checkout-btn" disabled={!state.firstName || state.firstName < 1 || !state.lastName || state.lastName < 3 || !state.phone}>Checkout</button>
            </div>
          </form>
        </div>
      )}
      {state.step === 3 && (
        <form className="booking-form-step-three" onSubmit={handleSubmit}>
          <p className="reserve-label-step-three">You made a reservation:</p>
          <article className="booking-text-top">
           {allData.map((item, index) => (
            <p key={index}>{item}</p>
            ))}
           </article>
           <p className="reserve-note-two">If you cannot come to us, please you can change the date in your account.</p>
          <button type="submit" aria-label="Submit all steps form" role="button" name="submit-btn">OK</button>
        </form>
      )}
      {state.step === 4 && (
        <ConfirmedBooking />
      )}
    </section>
  );
}

export default BookingForm;