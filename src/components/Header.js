import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="doctor-info">
        <img src="/doctor.jpg" alt="Dr. Jose Simmons" />
        <div>
          <h2>Dr. Jose Simmons</h2>
          <p>General Practitioner</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
