import React from 'react'
import './TopPlayers.css'

const TopPlayers = ({ users }) => {
  return (
    <div className='topPlayers__container'>
      <ul className='topPlayers__list'>
        <h2 className='topPlayers__title'>Top 10 players</h2>
        {users.map((user) => (
          <li key={user.id} className='topPlayers__player'>
            <h4>{user.name}</h4>
            <p>Finished in {user.time} seconds!</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopPlayers
