import React from 'react'
import logo from './logo.svg'
import './App.css'
import Oscillator from './components/audio/BasicOscillator'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>SoundGen</h2>
        <Oscillator />
      </header>
    </div>
  )
}

export default App
