import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import ADSR from './components/audio/ADSR'
import Sequencer from './components/playback/Playback'

function App () {
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <ul>
            <li>
              <a class='active' href='#home'>
                SoundGen
              </a>
            </li>
            <li>
              <Link to='/adsr'>ADSR</Link>
            </li>
            <li>
              <Link to='/player'>Player</Link>
            </li>
            <li>
              <a href='/visualizer'>Visualizer</a>
            </li>
            <li>
              <a href='/randomgenerator'>Random Generator</a>
            </li>
            <li>
              <Link to='/sequencer'>Sequencer</Link>
            </li>
            <li>
              <a href='/piano'>Piano</a>
            </li>
          </ul>
          <Switch>
            <Route path='/adsr'>
              <ADSR />
            </Route>
            <Route path='/sequencer'>
              <Sequencer />
            </Route>
            <Route path='/'></Route>
          </Switch>
        </header>
      </Router>
    </div>
  )
}

export default App
