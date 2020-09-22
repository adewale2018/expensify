import React from "react";
import { connect } from "react-redux";

import addToBasket from "../actions/addAction";
import TShirt from "../images/cover1.jpg";
import Hoddie from "../images/cover3.jpg";
import N from "../images/cover5.jpg";
import B from "../images/cover7.jpg";
import C from "../images/cover8.jpg";
import A from "../images/cover4.jpg";

function Home(props) {
  console.log(props);
  return (
    <div className='container'>
      <div className='image'>
        <img src={TShirt} alt='A nice T Shirt' />
        <h3>Grey Shirt</h3>
        <h3>$15.00</h3>
        <a onClick={props.addToBasket} href='#' className='add-to-cart cart1'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={Hoddie} alt='A simple hoddie shirt' />
        <h3>Grey Shirt</h3>
        <h3>$10.00</h3>
        <a onClick={props.addToBasket} href='#' className='add-to-cart cart2'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={N} alt='' />
        <h3>Grey Shirt</h3>
        <h3>$12.00</h3>
        <a onClick={props.addToBasket} href='#' className='add-to-cart cart3'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={B} alt='' />
        <h3>Grey Shirt</h3>
        <h3>$11.00</h3>
        <a onClick={props.addToBasket} href='#' className='add-to-cart cart4'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={C} alt='' />
        <h3>Grey Shirt</h3>
        <h3>$11.00</h3>
        <a onClick={props.addToBasket} href='#' className='add-to-cart cart4'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={A} alt='' />
        <h3>Grey Shirt</h3>
        <h3>$11.00</h3>
        <a onClick={props.addToBasket} href='#' className='add-to-cart cart4'>
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default connect(null, { addToBasket })(Home);
