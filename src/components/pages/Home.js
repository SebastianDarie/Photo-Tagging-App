import React, { useState, useEffect } from 'react'
import clickCharacter from '../events/clickEvents'

const Home = ({ imgURL, imgData }) => {
  const [charInput, setCharInput] = useState(false)

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
        onClick={(e) => clickCharacter(e, imgData, charInput, setCharInput)}
      />
    </div>
  )
}

export default Home
