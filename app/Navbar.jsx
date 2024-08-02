'use client'
import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Rental Properties</h1>
      </div>
      <div className="welcome-message">
        <p>Welcome to Rental Properties!</p>
      </div>
      <div className="welcome-message">
        <p>Have a Nice Day.</p>
      </div>
    </div>
  )
}

export default Navbar