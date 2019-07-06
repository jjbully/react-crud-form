import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../../GoogleAuth/GoogleAuth';
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        All Post
      </Link>
      <div>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;