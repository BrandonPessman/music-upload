import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Playlist from './components/Pages/Playlists/Playlists'
// import ADSR from './components/audio/ADSR'
// import Sequencer from './components/playback/Playback'
import Landing from './components/Pages/Landing/Landing'
function App () {
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <center>
            <ul>
              <li className='logo' style={{ left: '0', position: 'absolute' }}>
                <Link to=''>Wavely</Link>
              </li>
              <li className='navigation-button active'>
                <Link to=''>Home</Link>
              </li>
              <li className='navigation-button'>
                <Link to='/playlists'>Playlists</Link>
              </li>
              <li className='navigation-button'>
                <Link to=''>Discover</Link>
              </li>
              <li className='navigation-button'>
                <Link to=''>Workshop</Link>
              </li>
            </ul>
          </center>
        </header>
        <Switch>
          <Route path='/playlists'>
            <Playlist />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
