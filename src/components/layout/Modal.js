import React from 'react'
import './Modal.css'

const Modal = () => {
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
          <h2>Add Your Name</h2>
        </div>

        <div className='modal-body'>
          <form className='form'>
            <div className='fields'>
              <div>
                <label htmlFor='name'>Name</label>
                <input
                  placeholder='John Doe'
                  className='field'
                  type='text'
                  name='name'
                  required
                  autoFocus
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
