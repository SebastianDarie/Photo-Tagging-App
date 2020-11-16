import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__links'>
        <li className='navbar__hero'>
          <div className='navbar__imageContainer'>
            <img
              src='https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ls_waldo_profile_pic_1.max-200x200.png'
              alt='waldo'
              className='navbar__logo'
            />
            <h2 className='navbar__title'>Where's Waldo?</h2>
          </div>
        </li>
        <Link to='/leaderboard'>
          <button className='navbar__btn'>Leaderboard</button>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
