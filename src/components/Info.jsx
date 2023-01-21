import React from 'react';
import avatar from '../assets/profile.png';
import email from '../assets/email.png';
import linked from '../assets/linkedin.png';

export default function Info() {
  return (
    <div className="info">
      <img src={avatar} alt="doggo in yellow shirt" className="info--avatar" />
      <div className="info--name">Toby Snoots</div>
      <div className="info--title">Fullstack Developer</div>
      <div className="info--site">tobysnoots.website</div>
      <div className="info--buttons">
        <button className="info--button-email">
          <img src={email} alt="email icon" />
          Email
        </button>
        <button className="info--button-linkedin">
          <img src={linked} alt="linkedIn icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
