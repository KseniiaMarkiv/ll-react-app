import React from 'react';

const ConfirmedBooking = (props) => {
  const { handleSubmit } = props;

  return (
    <section className='section-seeya'>
      <form onSubmit={handleSubmit}>
        <p className='seeya-header'>Thank you</p>
        <div className="booking-gif">
          <img src="./88860-success-animation.gif" alt="Success gif" width={400} height={400}/>
        </div>
        <p className='seeya'>See you soon!</p>
        <button type="submit" role="button" name="submit-btn">OK</button>
      </form>
   </section> 
  );
};

export default ConfirmedBooking;
