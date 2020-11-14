import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import clickCharacter from '../events/clickEvents'
import Modal from '../layout/Modal'

const Home = ({ imgURL, imgData }) => {
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

  return (
    <div className='image__container'>
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
            setGameOver
          )
        }
      />
      {gameOver && <Modal />}
    </div>
  )
}

export default Home
