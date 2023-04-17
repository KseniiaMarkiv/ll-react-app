import React, { useContext } from "react";
import uuid from "react-uuid";
import { fetchAPI, submitAPI } from './api';
import { BookingContext } from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';


function BookingForm() {

  const { state, dispatch } = useContext(BookingContext);

// all given data
  const formattedDate = state.date.toLocaleDateString("en-US", { 
    month: "long", 
    day: "numeric", 
    year: "numeric" 
  });

  const data = [
    state.guests + ' guest(s)',
    formattedDate,
    state.time,
  ]
  const allData = [
    state.firstName + ' ' + state.lastName + ',',
    state.phone,
    state.guests + ' guests',
    formattedDate,
    state.time,
  ]
// END all given data

  const handleDateChange = async (e) => {
    const newDate = new Date(e.target.value);
    const availableTimes = await fetchAPI(newDate);
    dispatch({ type: 'SET_DATE', payload: { date: newDate, availableTimes } });
  };

  const handleTimeChange = (e) => {
    dispatch({ type: 'SET_TIME', payload: { time: e.target.value } });
  };

  const handleGuestsChange = (e) => {
    dispatch({ type: 'SET_GUESTS', payload: { guests: e.target.value } });
  };

  const handleOccasionChange = (e) => {
    dispatch({ type: 'SET_OCCASION', payload: { occasion: e.target.value } });
  };
//  new code

  const handleNextStep = (e) => {
    dispatch({ type: 'nextStep', payload: { step: e.target.value } });
  };

  const handlePrevStep = (e) => {
    dispatch({ type: 'prevStep', payload: { step: e.target.value }  });
  };

  const handleFirstNameChange = (e) => {
    dispatch({ type: 'SET_FIRST_NAME', payload: { firstName: e.target.value } });
  };

  const handleLastNameChange = (e) => {
    dispatch({ type: 'SET_LAST_NAME', payload: { lastName: e.target.value } });
  };

  const handlePhoneChange = (e) => {
    dispatch({ type: 'SET_PHONE', payload: { phone: e.target.value } });
  };

  const handleCommentChange = (e) => {
    dispatch({ type: 'SET_COMMENT', payload: { comment: e.target.value } });
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert(data);
    // alert(JSON.stringify(data, null, 1));
  };
//  end new code

  return (
    <section>
      {state.step === 1 && (
        <div>
          <h1 className='reserve-header'>Reserve a table</h1>
          <form className="booking-form" onSubmit={handleNextStep} >
            <label className="reserve-label" htmlFor="res-date">Choose date</label>
            <input 
                  className="reserve-input" 
                  type="date" 
                  id="res-date"
                  min={new Date().toJSON().slice(0, 10)} max="2023-12-31" 
                  value={state.date.toJSON().slice(0, 10)} 
                  onChange={handleDateChange}  />
            <label className="reserve-label" htmlFor="res-time">Select time</label>
            <select 
                className="reserve-input"
                id="res-time"
                  value={state.time} 
                  onChange={handleTimeChange}
                  >
              {state.availableTimes.map((time) => (
                <option key={uuid()} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <label className="reserve-label" htmlFor="guests">Number of guests</label>
            <input 
                  className="reserve-input" 
                type="number" 
                placeholder="1" min="1" max="10" 
                id="guests"
                value={state.guests} 
                onChange={handleGuestsChange} />
            <label className="reserve-label" htmlFor="occasion">Occasion</label>
            <select 
                className="reserve-input"
                id="occasion"
                value={state.occasion} 
                onChange={handleOccasionChange} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" role="button" name="book-btn" disabled={!state.date || !state.time || !state.guests}>Book table</button>
          </form>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h1 className='reserve-header'>Your reservation:</h1>
          <form className="booking-form" onSubmit={handleNextStep}>
            <article className="booking-text-top">
            {data.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </article>
            <label className="reserve-label" htmlFor="firstName">First Name:</label>
            <input 
                className="reserve-input"
                type="text" 
                id="firstName"
                placeholder="your First name"
                value={state.firstName} 
                onChange={handleFirstNameChange} />

            <label className="reserve-label" htmlFor="lastName">Last Name:</label>
            <input 
                className="reserve-input"
                type="text" 
                id="lastName" 
                placeholder="your Last name"
                value={state.lastName} 
                onChange={handleLastNameChange} />

            <label className="reserve-label" htmlFor="phone">Phone:</label>
            <input 
                className="reserve-input"
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="123-333-4444" 
                value={state.phone} 
                onChange={handlePhoneChange} 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

            <label className="reserve-label" htmlFor="comment">Additional comment:</label>
            <textarea className="additional-comment" id="comment" rows="4" cols="30" placeholder='Additional comment' value={state.comment} onChange={handleCommentChange}></textarea>
            <p className="reserve-note-one"> Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</p>
            <div className="btns-container">
              <button type="button" role="button" name="checkout-btn" onClick={handlePrevStep}>Back</button>
              <button type="submit" role="button" name="checkout-btn">Checkout</button>
            </div>
          </form>
        </div>
      )}
      {state.step === 3 && (
        <form className="booking-form-step-three" onSubmit={handleNextStep}>
          <p className="reserve-label-step-three">You made a reservation:</p>
          <article className="booking-text-top">
           {allData.map((item, index) => (
            <p key={index}>{item}</p>
            ))}
           </article>
           <p className="reserve-note-two">If you cannot come to us, please you can change the date in your account.</p>
          <button type="submit" role="button" name="submit-btn">OK</button>
        </form>
      )}
      {state.step === 4 && (
        <ConfirmedBooking state={state} />
      )}
    </section>
  );
}

export default BookingForm;