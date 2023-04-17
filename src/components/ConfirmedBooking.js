import React from 'react';

const ConfirmedBooking = (props) => {
  const { state } = props;

  return (
    <section className='section-seeya'>
      <p className='seeya-header'>Thank you</p>
      <p className='seeya'>{state.firstName}</p>
      <div className="booking-gif">
        <img src="./88860-success-animation.gif" alt="Success gif" width={400} height={400}/>
      </div>
      <p className='seeya'>See you soon!</p>
    </section>
  );
};

export default ConfirmedBooking;
