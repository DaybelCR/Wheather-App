import React from 'react';
import Logo from '../../assets/weather.png'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import s from './Nav.module.css';


function Nav() {
  return (
    <nav className={s.nav}> 
    
     <NavLink exact to='/' activeClassName='selected'>
         <span >
         <img id="logoHenry" src={Logo} width="30" height="30" alt="" />
          Home
        </span>
      </NavLink>     
       <NavLink exact to='/about' activeClassName='active'><span>About</span></NavLink>
      <Route exact path='/'><SearchBar/></Route>
    </nav>
  );
};

export default Nav;