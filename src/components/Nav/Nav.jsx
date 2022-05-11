import React from 'react';
import Logo from '../../assets/weather.png'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import s from './Nav.module.css';


function Nav() {
  return (
    <nav className={s.nav}> 
    <ul className={s.menu}>
        <li>
             <NavLink exact to='/' activeClassName='selected'>
             <img id="logo" src={Logo} width="20" height="20" alt="" />
             Home </NavLink>
        </li>
        <li>
              <NavLink exact to='/about' activeClassName='selected'>About</NavLink>
        </li>
    </ul>
      <Route exact path='/'><SearchBar/></Route>
    </nav>
  );
};

export default Nav;