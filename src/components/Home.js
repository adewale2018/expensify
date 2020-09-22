import React from "react";

import TShirt from '../images/cover1.jpg';
import Hoddie from '../images/cover2.jpg';
import N from '../images/cover3.jpg';
import M from '../images/cover4.jpg';

function Home() {
  return (
    <div className='container'>
      <div className='image'>
        <img src={TShirt} alt='A nice T Shirt' />
        <h3>Grey Shirt</h3>
        <h3>$15.00</h3>
        <a href='#' className='add-to-cart cart1'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={Hoddie} alt='A simple hoddie shirt' />
        <h3>Grey Shirt</h3>
        <h3>$10.00</h3>
        <a href='#' className='add-to-cart cart2'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={N} alt='' />
        <h3>Grey Shirt</h3>
        <h3>$12.00</h3>
        <a href='#' className='add-to-cart cart3'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={M} alt='' />
        <h3>Grey Shirt</h3>
        <h3>$11.00</h3>
        <a href='#' className='add-to-cart cart4'>Add to Cart</a>
      </div>
    </div>
  );
}

export default Home;
