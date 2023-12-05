import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  width: '200px',
  height: '100vh',
  borderRight: '1px solid #dee2e6'
};

const linkStyle = {
  color: '#000',
  textDecoration: 'none',
  padding: '10px 15px',
  display: 'block'
};

const activeLinkStyle = {
  backgroundColor: '#0d6efd',
  color: '#fff'
};

function Nav() {
  return (
    <div style={navStyle}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink exact to="/" style={linkStyle} activeStyle={activeLinkStyle}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/project/search" style={linkStyle} activeStyle={activeLinkStyle}>Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/project/signin" style={linkStyle} activeStyle={activeLinkStyle}>Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/project/signup" style={linkStyle} activeStyle={activeLinkStyle}>Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/project/account" style={linkStyle} activeStyle={activeLinkStyle}>Account</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;