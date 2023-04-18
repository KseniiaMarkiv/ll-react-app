import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <section className='section-seeya'>
      <p className='seeya-header'>Thank you</p>
      <div className="booking-gif">
        <img src="./88860-success-animation.gif" alt="Success gif" width={400} height={400}/>
      </div>
      <p className='seeya'>See you soon!</p>
      <button type="submit" role="button" name="submit-btn" onClick={handleClick}>OK</button>
   </section> 
  );
};

export default ConfirmedBooking;
