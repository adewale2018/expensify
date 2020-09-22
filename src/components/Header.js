import React from "react";
import { connect } from "react-redux";

import { getNumbers } from "../actions/getActions";

function Header(props) {
  const num = props.basketNum.basketNumber;
  console.log("PROPS", num);
  return (
    <div>
      <header>
        <div className='overlay' />
        <nav>
          <h2>SHOP</h2>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li className='cart'>
              <a href='#'>
                <i className='fas fa-cart-plus'></i>
                Cart<span>{num}</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketNum: state.basketNum,
});

export default connect(mapStateToProps, { getNumbers })(Header);
