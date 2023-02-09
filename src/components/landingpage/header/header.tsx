import './header.css';
import React from 'react';
import { Navigate } from 'react-router-dom';

/* pages */

function Header() {
  /* initialize the state variable 'goToLogin' to false */
  const [goToLogin, setGoToLogin] = React.useState(false);
  /* initialize the state variable 'goToSignUp' to false */
  const [goToSignUp, setGoToSignUp] = React.useState(false);

  /* if either 'goToLogin' or 'goToSignUp' is true */
  if (goToLogin || goToSignUp) {
    /* redirect to the login page */
    return <Navigate to="/login" />;
  }
  
  /* otherwise, return the header component */
  return (
    <header>
        <div className="name-section">
          <div className="logoto">
            <img src="https://media.discordapp.net/attachments/784387504777199639/1071549773322125433/22-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="account-section">
            <a className='account-button login' id='Log-In' onClick={() => {
              /* set 'goToLogin' to true */
              setGoToLogin(true);
              }}
            >Log In</a>
            <a className='account-button signup' id='Sign-Up' onClick={() => {
              /* set 'goToSignUp' to true */
              setGoToSignUp(true);
              }}> Sign Up</a>
        </div>
    </header>
  );
}

export default Header;