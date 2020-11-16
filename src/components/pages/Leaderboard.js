import React, { useState, useEffect } from 'react'
import LeaderboardNav from '../layout/LeaderboardNav'
import TopPlayers from '../layout/TopPlayers'

const Leaderboard = ({ db }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getLeaderboard = async () => {
      let arr = []

      const data = await db
        .collection('leaderboard')
        .orderBy('time')
        .limit(10)
        .get()

      data.forEach((doc) => {
        arr.push(doc.data())
        setUsers([...arr])
      })
    }

    getLeaderboard()
  }, [db])

  return (
    <>
      <LeaderboardNav />
      <TopPlayers users={users} />
    </>
  )
}

export default Leaderboard
