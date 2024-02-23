import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './Brand.css';

const Brand = () => {
  const brandImages = {
    google,
    slack,
    atlassian,
    dropbox,
    shopify
  };

  const brandNames = Object.keys(brandImages);

  return (
    <div className='gpt3__brand section__padding'>
      {brandNames.map((brand, index) => (
        <div key={index}>
          <img src={brandImages[brand]} alt={brand} />
        </div>
      ))}
    </div>
  );
}

export default Brand;