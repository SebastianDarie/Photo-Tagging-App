import React from 'react'
import { Link } from 'react-router-dom'

import './LeaderboardNav.css'

const LeaderboardNav = () => {
  return (
    <nav className='leaderboardNavbar'>
      <ul className='leaderboardNavbar__links'>
        <li className='leaderboardNavbar__title'>Leaderboard</li>
        <Link to='/' className='leaderboardNavbar__home'>
          <button className='leaderboardNavbar__btn'>Home</button>
        </Link>
      </ul>
    </nav>
  )
}

export default LeaderboardNav
