import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import clickCharacter from '../events/clickEvents'
import Modal from '../layout/Modal'
import Navbar from '../layout/Navbar'

const Home = ({ db, imgURL, imgData }) => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [charInput, setCharInput] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const alert = useAlert()

  useEffect(() => {
    const box = document.querySelector('.target__box')
    const menu = document.querySelector('.dropdown__menu')

    if (charInput === false && box !== null && menu !== null) {
      document.body.removeChild(box)
      document.body.removeChild(menu)
    }
  }, [charInput])

  useEffect(() => {
    setStartTime(Date.now())
  }, [])

  return (
    <>
      <Navbar />

      <div className='image__container'>
        {gameOver && <Modal db={db} startTime={startTime} endTime={endTime} />}
        <img
          src={imgURL}
          alt='waldo'
          className='waldo__img'
          onClick={(e) =>
            clickCharacter(
              e,
              imgData,
              charInput,
              setCharInput,
              alert,
              setGameOver,
              setEndTime
            )
          }
        />
      </div>
    </>
  )
}

export default Home
