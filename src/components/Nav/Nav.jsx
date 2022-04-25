import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="">
      <Link to='/'>
         <span className="">
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'><span>About</span></Link>
    </nav>
  );
};

export default Nav;