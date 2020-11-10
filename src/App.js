//import { useState, useEffect } from 'react'
import { db, storage } from './database/firebase'
import useFirebaseDB from './hooks/useFirebaseDB'
import Spinner from './components/layout/Spinner'

import './App.css'

function App() {
  const { imgURL, imgData } = useFirebaseDB(db, storage)

  const clickCharacter = (e) => {
    const targetBox = document.createElement('div')
    targetBox.style.position = 'absolute'
    targetBox.style.left = e.pageX - 20 + 'px'
    targetBox.style.top = e.pageY - 20 + 'px'
    targetBox.style.height = '45px'
    targetBox.style.width = '45px'
    targetBox.style.border = '4px dashed #000'

    document.body.append(targetBox)
    const axisX = e.clientX
    const axisY = e.clientY
    console.log(axisX, axisY)

    // console.log(
    //   imgData[0]['coordinates'][0],
    //   imgData[0]['coordinates'][1],
    //   imgData[0]['coordinates'][2],
    //   imgData[0]['coordinates'][3]
    // )

    if (
      axisX >= imgData[0]['coordinates'][0] &&
      axisX <= imgData[0]['coordinates'][1] &&
      axisY >= imgData[0]['coordinates'][2] &&
      axisY <= imgData[0]['coordinates'][3]
    ) {
      targetBox.style.border = '4px solid #1ed15e'
    } else {
      console.log('no')
    }
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
      {/* <map name='waldo-map'>
        <area shape='rect' coords='660, 270, 630 , 240' alt='waldo' href='#' />
      </map> */}
    </div>
  )
}

export default App
