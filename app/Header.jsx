'use client';
import React from 'react';
import Link from 'next/link';

function Header({ imageSrc, title1, title2, description, link, buttonText }) {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <h1 className='title-1'>{title1}</h1>
        <h2 className='title-2'>{title2}</h2>
        <p className='description'>{description}</p>
        <img src={imageSrc} width={400} height={400} alt="Sample Image" className='image' />
        <div className='button-container'>
         
          <Link href='/RentalProperties'>
            <button className='cta-button'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;