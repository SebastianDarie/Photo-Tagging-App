import { positions, transitions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { db, storage } from './database/firebase'
import useFirebaseDB from './hooks/useFirebaseDB'
import Spinner from './components/layout/Spinner'
import Home from './components/pages/Home'

import './App.css'

const options = {
  timeout: 3000,
  position: positions.MIDDLE,
  transition: transitions.FADE,
}

function App() {
  const { imgURL, imgData } = useFirebaseDB(db, storage)

  return (
    <Provider template={AlertTemplate} {...options}>
      {!imgURL && <Spinner />}
      {imgURL && <Home imgURL={imgURL} imgData={imgData} />}
    </Provider>
  )
}

export default App
