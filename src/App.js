//import { useState, useEffect } from 'react'
import { db, storage } from './database/firebase'
import useFirebaseDB from './hooks/useFirebaseDB'
import Spinner from './components/layout/Spinner'

import './App.css'

function App() {
  const { imgURL, imgData } = useFirebaseDB(db, storage)

  const makeSelection = (name, axisX, axisY, targetBox, dropdown) => {
    const character = imgData.find((el) => el.name === name)

    if (
      axisX >= character.coordinates[0] &&
      axisX <= character.coordinates[1] &&
      axisY >= character.coordinates[2] &&
      axisY <= character.coordinates[3]
    ) {
      targetBox.style.border = '4px solid #1ed15e'
      document.body.removeChild(dropdown)
    } else {
      document.body.removeChild(targetBox)
      document.body.removeChild(dropdown)
    }
  }

  const clickCharacter = (e) => {
    const axisX = e.clientX
    const axisY = e.clientY

    const targetBox = document.createElement('div')
    targetBox.style.position = 'absolute'
    targetBox.style.left = e.pageX - 20 + 'px'
    targetBox.style.top = e.pageY - 20 + 'px'
    targetBox.style.height = '45px'
    targetBox.style.width = '45px'
    targetBox.style.border = '4px dashed #000'
    document.body.append(targetBox)

    const dropdown = document.createElement('div')
    dropdown.className = 'dropdown__menu'
    dropdown.style.left = e.pageX + 40 + 'px'
    dropdown.style.top = e.pageY - 20 + 'px'
    document.body.append(dropdown)

    imgData.map(
      (doc) =>
        (dropdown.innerHTML += `<div class='dropdown__menuOption'>${doc.name}</div>`)
    )

    document
      .querySelectorAll('.dropdown__menuOption')
      .forEach((option) =>
        option.addEventListener('click', () =>
          makeSelection(option.innerText, axisX, axisY, targetBox, dropdown)
        )
      )
  }

  return (
    <div className='app'>
      {!imgURL && <Spinner />}
      {imgURL && (
        <div className='image__container'>
          <img
            src={imgURL}
            alt='waldo'
            className='waldo__img'
            useMap='#waldo-map'
            onClick={clickCharacter}
          />
        </div>
      )}
    </div>
  )
}

export default App
