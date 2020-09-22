import React from "react";

function Header() {
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
                <ion-icon name='basket'></ion-icon>
                Cart<span>0</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;