import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ db, startTime, endTime }) => {
  const [inputText, setInputText] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await db.collection('leaderboard').add({
        name: inputText,
        time: Math.floor((endTime - startTime) / 1000),
        id: Math.floor(Math.random() * 100000),
      })

      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  const inputHandler = (e) => {
    setInputText(e.target.value)
  }

  const closeHandler = (e) => {
    e.target.parentNode.parentNode.parentNode.style.display = 'none'
  }

  const clickAway = (e) => {
    if (e.target.className === 'modal') {
      e.target.style.display = 'none'
    }
  }

  window.addEventListener('click', clickAway)

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close' onClick={closeHandler}>
            &times;
          </span>
          <h2>Congratulations</h2>
        </div>

        <div className='modal-body'>
          <p>
            You have found all characters in just{' '}
            {Math.floor((endTime - startTime) / 1000)} seconds
          </p>
          <form className='form' onSubmit={submitHandler}>
            <div className='fields'>
              <div className='center-field'>
                <label htmlFor='name'>Name</label>
                <input
                  placeholder='John Doe'
                  className='field'
                  type='text'
                  name='name'
                  required
                  autoFocus
                  onChange={inputHandler}
                />
              </div>
            </div>

            <button className='submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
