import React from 'react';
import logo from '../images/planet-logo.svg';

export default function Header() {
  return (
    <header className="header flex">
      <img className="header__logo" src={logo} alt="Planet Logo"></img>
      <h3 className="header__logo-text">my travel journal.</h3>
    </header>
  );
}
