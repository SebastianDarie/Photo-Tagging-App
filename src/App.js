import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { positions, transitions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { db, storage } from './database/firebase'
import useFirebaseDB from './hooks/useFirebaseDB'
import Spinner from './components/layout/Spinner'
import Home from './components/pages/Home'
import Leaderboard from './components/pages/Leaderboard'

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
      <Router>
        {!imgURL && <Spinner />}
        <Switch>
          <Route exact path='/'>
            {imgURL && <Home db={db} imgURL={imgURL} imgData={imgData} />}
          </Route>
          <Route exact path='/leaderboard'>
            <Leaderboard db={db} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
