import { db, storage } from './database/firebase'
import useFirebaseDB from './hooks/useFirebaseDB'
import Spinner from './components/layout/Spinner'
import Home from './components/pages/Home'

import './App.css'

function App() {
  const { imgURL, imgData } = useFirebaseDB(db, storage)

  return (
    <div className='app'>
      {!imgURL && <Spinner />}
      {imgURL && <Home imgURL={imgURL} imgData={imgData} />}
    </div>
  )
}

export default App
