import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Playlist from './components/Pages/Playlists/Playlists'
import Landing from './components/Pages/Landing/Landing'
import Navigation from './components/Navigation/Navigation'

function App () {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path='/playlists'>
          <Playlist />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
