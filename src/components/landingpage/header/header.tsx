import './header.css';
import React from 'react';
import { Navigate } from 'react-router-dom';

/* pages */

function Header() {
  const [goToLogin, setGoToLogin] = React.useState(false);
  const [goToSignUp, setGoToSignUp] = React.useState(false);

  if (goToLogin || goToSignUp) {
    return <Navigate to="/login" />;
  }
  
  return (
    <header>
        <div className="name-secton">
          <div className="logoto">
            <img src="https://media.discordapp.net/attachments/784387504777199639/1071549773322125433/22-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="account-section">
            <a className='account-button login' id='Log-In' onClick={() => {
              setGoToLogin(true);
              }}
            >Log In</a>
            <a className='account-button signup' id='Sign-Up' onClick={() => {
              setGoToSignUp(true);
              }}> Sign Up</a>
        </div>
    </header>
  );
}

export default Header;